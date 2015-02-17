var PassThrough = require('stream').PassThrough || require('readable-stream/passthrough')
var filters = 'results=recent&type=quote&page=' + Math.round(Math.random()*10)

module.exports = function(isRun) {
  var submissionOut = new PassThrough()
    , solutionOut   = new PassThrough()
  var superagent = require('superagent')
  setTimeout(function() {
    superagent
      .get('http://localhost:3000/search/?' + filters)
      .pipe(submissionOut)
    if (!isRun) {
      superagent
        .get('http://localhost:3001/search/?' + filters)
        .pipe(solutionOut)
    }
   }, 500)
  return {
      long: true
    , submissionArgs: [3000]
    , solutionArgs: [3001]
    , a : submissionOut
    , b : solutionOut
  }
}