var express = require('express')
var connect = require('connect')
var app = express()

app.use(connect.urlencoded())

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])