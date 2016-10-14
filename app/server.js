const serverRouter = require('server-router')
const browserify = require('browserify')
const bankai = require('bankai')
const http = require('http')
const path = require('path')
const client = require('./client')

const port = process.env.PORT || 3000
const clientPath = path.join(__dirname, 'client.js')

const assets = bankai()
const css = assets.css()
const js = assets.js(browserify, clientPath)
const html = assets.html({
  title: 'hello',
  body: client.toString('/', { message: 'hello server!' })
})

const routes = [
  ['/', html],
  ['/404', html],
  ['/bundle.css', css],
  ['bundle.js', js]
]

const router = serverRouter('/404', routes)
const server = http.createServer((req, res) => router(req, res).pipe(res))

server.listen(port, () => {
  console.log(`some yokel is listening on http://localhost:${port}`)
})
