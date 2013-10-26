/*global process, require*/
(function () {
    'use strict';
    var express = require('express'),
        app = express();

    app.get('/search', function (req, res) {
        var query = req.query;
        res.send(query);
    });

    app.listen(process.argv[2]);
}());