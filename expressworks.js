#!/usr/bin/env node

const Workshopper = require('workshopper')
    , path        = require('path')

Workshopper({
    name     : 'expressworks'
  , title    : 'Master Express.js and have fun!'
  , appDir   : __dirname
  , helpFile : path.join(__dirname, 'help.txt')
}).init()