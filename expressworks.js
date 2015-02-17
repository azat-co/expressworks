#!/usr/bin/env node

const Workshopper = require('workshopper')
    , path        = require('path')

function fpath (f) {
  return path.join(__dirname, f)
}

Workshopper({
    name      : 'expressworks'
  , appDir    : __dirname
  , languages : ['en', 'fr']
  , helpFile  : fpath('./i18n/help/{lang}.txt')
})
