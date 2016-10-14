var app = require('choo')()
var css = require('sheetify')
var layout = require('./layout')

css('./site.css', { global: true })
css('font-awesome', { global: true })

app.model(require('./model'))

app.router((route) => [
  route('/', layout)
])

if (module.parent) module.exports = app
else app.start('#app-root')
