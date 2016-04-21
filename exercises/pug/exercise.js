var path = require('path')
  , through2 = require('through2')
  , superagent = require('superagent')
  , exercise = require('workshopper-exercise')()
  , filecheck = require('workshopper-exercise/filecheck')
  , execute = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , rndport = require('../../lib/rndport');

// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

// set up ports to be passed to submission and solution
exercise.addSetup(function (mode, callback) {
  this.submissionPort = rndport();
  this.solutionPort = this.submissionPort + 1;

  this.submissionArgs = [this.submissionPort, path.join(__dirname, 'templates')];
  this.solutionArgs = [this.solutionPort, path.join(__dirname, 'templates')];

  process.nextTick(callback);
});

// add a processor for both run and verify calls, added *before*
// the comparestdout processor so we can mess with the stdouts
exercise.addProcessor(function (mode, callback) {
  this.submissionStdout.pipe(process.stdout);

  // replace stdout with our own streams
  this.submissionStdout = through2();
  if (mode == 'verify')
    this.solutionStdout = through2();

  setTimeout(query.bind(this, mode), 1500);

  process.nextTick(function () {
    callback(null, true);
  });
});


// compare stdout of solution and submission
exercise = comparestdout(exercise);

// delayed for 500ms to wait for servers to start so we can start
// playing with them
function query(mode) {
  var exercise = this;

  function connect(port, stream) {
    var url = 'http://localhost:' + port + '/home';

    superagent.get(url)
      .on('error', function (err) {
        exercise.emit(
            'fail'
          , exercise.__('fail.connection', { address: url, message: err.message })
        );
      })
      .pipe(stream);
  }

  connect(this.submissionPort, this.submissionStdout);

  if (mode == 'verify')
    connect(this.solutionPort, this.solutionStdout);
}

module.exports = exercise;
