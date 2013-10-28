/*global process, require*/
/*jslint unparam:true*/
var express = require('express'),
    app = express(),
    fs = require('fs');

app.get('/books', function (req, res) {
    var filename = process.argv[3],
        books;
    fs.readFile(filename, function (error, data) {
        if (error) {
            return res.send(500, 'Error reading' + filename);
        }
        try {
            books = JSON.parse(data);
        } catch (e) {
            res.send(500);
        }
        res.json(books);
    });
});

app.listen(process.argv[2]);