/*global process, require*/
var express = require('express'),
    app = express();

app.get('/search', function (req, res) {
    var query = req.query;
    res.send(query);
});

app.listen(process.argv[2]);