var PassThrough = require('stream').PassThrough || require('readable-stream/passthrough')
  var str = require('crypto')
    .createHash('md5')
    .update(Math.random().toString())
    .digest('hex')

module.exports = function(isRun) {
  var submissionOut = new PassThrough()
    , solutionOut   = new PassThrough()
  var superagent = require('superagent')
  setTimeout(function() {
    superagent
      .put('http://localhost:3000/message/' + str)
      .pipe(submissionOut)
    if (!isRun) {
      superagent
        .put('http://localhost:3001/message/' + str)
        .pipe(solutionOut)
    }
   }, 500)
  return {
      submissionArgs: [3000]
    , solutionArgs: [3001]
    , a : submissionOut
    , b : solutionOut
  }
}