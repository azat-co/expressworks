var PassThrough = require('stream').PassThrough || require('readable-stream/passthrough')
var path = require('path')

module.exports = function(isRun) {
  var submissionOut = new PassThrough()
    , solutionOut   = new PassThrough()
  var superagent = require('superagent')
  setTimeout(function() {
    superagent
      .get('http://localhost:3000/books/')
      .pipe(submissionOut)
    if (!isRun) {
      superagent
        .get('http://localhost:3001/books')
        .pipe(solutionOut)
    }
   }, 500)
  return {
      long: true
    , submissionArgs: [3000, path.join(__dirname, 'books.json')]
    , solutionArgs: [3001, path.join(__dirname, 'books.json')]
    , a : submissionOut
    , b : solutionOut
  }
}