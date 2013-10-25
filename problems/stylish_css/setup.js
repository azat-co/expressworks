var PassThrough = require('stream').PassThrough || require('readable-stream/passthrough')
var path = require('path')

module.exports = function(isRun) {
  var submissionOut = new PassThrough()
    , solutionOut   = new PassThrough()
  var superagent = require('superagent')
  setTimeout(function() {
    superagent
      .get('http://localhost:3000/main.css')
      .pipe(submissionOut)
    if (!isRun) {
      superagent
        .get('http://localhost:3001/main.css')
        .pipe(solutionOut)
    }
   }, 500)
  return {
      submissionArgs: [3000, path.join(__dirname, '/public')]
    , solutionArgs: [3001, path.join(__dirname, '/public')]
    , a : submissionOut
    , b : solutionOut
  }
}