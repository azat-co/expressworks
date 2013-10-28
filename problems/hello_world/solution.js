/*global process, require*/
/*jslint unparam:true*/
(function () {
    'use strict';
    var express = require('express'),
        app = express();
    app.get('/home', function (req, res) {
        res.end('Hello World!');
    });
    app.listen(process.argv[2]);
}());