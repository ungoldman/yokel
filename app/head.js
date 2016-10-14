var html = require('../html')

// currently unused

// required from state:
// - page (page metadata)
// - site (site metadata)
module.exports = function defaultHead (state) {
  var site = state.site
  var page = state.page

  return html`
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, height=device-height">

      <title>${site.title} | ${page.title}</title>

      <meta name="author" content="${page.author}">
      <meta name="description" content="${page.description}">

      <meta property="og:title" content="${page.title}">
      <meta property="og:url" content="${page.og.url}">

      <meta name="twitter:card" content="summary">
      <meta name="twitter:title" content="${page.title}">
      <meta name="twitter:description" content="${page.description}">
      <meta name="twitter:site" content="@${page.twitter.site}">
      <meta name="twitter:creator" content="@${page.twitter.creator}">

      <link rel="shortcut icon" href="/favicon.ico">
    </head>
  `
}
