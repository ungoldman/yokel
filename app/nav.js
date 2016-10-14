var html = require('../html')

// required from state:
// - title (site title)
module.exports = function defaultNav (site, send) {
  return html`
    <nav class="nav">
      <ul class="hamburger" onclick=${(e) => send('hamburger')}>
        <li>
          <a class="id">
            <i class="fa">☰</i> ${site.title}
          </a>
        </li>
      </ul>
    </nav>
  `
}
