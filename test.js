var express = require('express')
var port = process.argv[2]
var staticFilePath = process.argv[3]
var app = express()

app.use(express.static(staticFilePath))

app.listen(port)
