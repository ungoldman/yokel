var document = require('global/document')
var html = require('../html')
var md = require('../md')

// implementation based on choodown
// https://github.com/trainyard/choodown

// required from state:
// - text (raw markdown text)
// - mode (edit or render)
module.exports = function defaultContent (state, send) {
  var change = (e) => send('updateText', e.target.value)
  var click = (e) => send('toggleEditor')

  if (state.mode === 'edit') {
    return html`
      <main class="markdown-body">
        <button class="edit-btn" onclick=${click}>save</button>
        <textarea oninput=${change}>${state.text}</textarea>
      </main>
    `
  }

  var el = document.createElement('div')

  el.innerHTML = md.render(state.text)

  return html`
    <main class="markdown-body">
      <button class="edit-btn" onclick=${click}>edit</button>
      ${el}
    </main>
  `
}
