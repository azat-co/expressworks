/*global process, require*/
/*jslint unparam:true*/
(function () {
    'use strict';
    var express = require('express'),
        app = express();

    app.put('/message/:id', function (req, res) {
        var id = req.param('id'),
            str = require('crypto')
                .createHash('sha1')
                .update(new Date().toDateString().toString() + id)
                .digest('hex');
        res.send(str);
    });

    app.listen(process.argv[2]);
}());