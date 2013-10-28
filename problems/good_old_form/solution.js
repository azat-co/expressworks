/*global process, require*/
/*jslint unparam:true*/
var express = require('express'),
    app = express();

app.use(express.urlencoded());

app.post('/form', function (req, res) {
    res.send(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);
