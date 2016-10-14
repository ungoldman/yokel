var hljs = require('highlight.js')
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (e) {}
    }
    return '' // use external default escaping
  }
})

md.use(require('markdown-it-sub'))
md.use(require('markdown-it-sup'))
md.use(require('markdown-it-footnote'))
md.use(require('markdown-it-deflist'))
md.use(require('markdown-it-emoji'))
md.use(require('markdown-it-ins'))
md.use(require('markdown-it-mark'))
md.use(require('markdown-it-abbr'))

module.exports = md
