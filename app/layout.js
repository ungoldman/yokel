var document = require('global/document')
var html = require('../html')
var content = require('./content')
var nav = require('./nav')

module.exports = function defaultLayout (state, prev, send) {
  var pageClasses = 'page'
  if (state.nav.open) pageClasses += ' nav-open'

  return html`
    <div id="app-root" class="${pageClasses}">
      ${nav(state.site, send)}
      ${content(state.page.markdown, send)}
    </div>
  `
}
