const fs = require('fs')
const path = require('path')
const Workshopper = require('workshopper-adventure')
const usage = require('workshopper-adventure/default/help').file[0]
const menu = require('./exercises/menu.json')

const help = path.join(__dirname, './i18n/help/{lang}.txt')

const expressworks = Workshopper({
  appDir: __dirname,
  languages: ['en', 'fr', 'ko', 'zh-tw', 'ja','zh-cn', 'pt-br'],
  footer: require('workshopper-adventure/default/footer'),
  help: function (i18n, lang) {
    return [usage, help].map(function (file) {
      file = file.replace(/\{?\{lang\}?\}/g, lang)
      const content = fs.readFileSync(file)
      return '---\n' + content
    })
  }
})

expressworks.addAll(menu)

module.exports = expressworks
