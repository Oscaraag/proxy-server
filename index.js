const { createServer } = require('cors-anywhere')

const host = process.env.HOST || '0.0.0.0'
const path = process.env.path || ''
const port = process.env.PORT || 8080

createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
}).listen(port, `${host}${path}`, function () {
  console.log('Running CORS Anywhere on ' + host + ':' + port)
})
