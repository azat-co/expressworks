/*global process, require*/
/*jslint unparam:true, nomen: true*/
(function () {
    'use strict';
    var path = require('path'),
        express = require('express'),
        app = express();

    app.use(express.static(path.join(__dirname, '/public')));

    app.listen(process.argv[2]);
}());