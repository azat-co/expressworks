var express = require('express')
var app = express()
app.get('/home', function(req, res) {
  res.end('Bonjour, monde !')
})
app.listen(process.argv[2])
