/*global process, require*/
/*jslint unparam:true*/
(function () {
    'use strict';
    var express = require('express'),
        app = express();
    app.set('view engine', 'jade');
    app.set('views', process.argv[3]);
    app.get('/home', function (req, res) {
        res.render('index', {date: new Date().toDateString()});
    });
    app.listen(process.argv[2]);
}());