// const express = require('express')
// const morgan = require('morgan')
// const { createProxyMiddleware } = require('http-proxy-middleware')
// const corsAnywhere = require('cors-anywhere')
// // const apicache = require('apicache')
// const expressHttpProxy = require('express-http-proxy')
// // Create Express Server
// const app = express()

// // Configuration
// const CORS_PROXY_PORT = 3030
// const APP_PORT = process.env.PORT || 8080
// const HOST = 'localhost'

// // Logging
// app.use(morgan('dev'))

// corsAnywhere
//   .createServer({})
//   .listen(CORS_PROXY_PORT, () =>
//     console.log(
//       `Internal CORS Anywhere server started at port ${CORS_PROXY_PORT}`
//     )
//   )

// // Create express Cache server

// // Proxy to CORS server

// // Proxy to CORS server
// app.use(expressHttpProxy(`localhost:${CORS_PROXY_PORT}`))

// // Proxy endpoints
// // app.use(
// //   '/',
// //   createProxyMiddleware({
// //     target: `localhost:${CORS_PROXY_PORT}`,
// //     changeOrigin: true,
// //   })
// // )

// app.listen(APP_PORT, () => {
//   console.log(`External CORS cache server started at port ${APP_PORT}`)
// })

// // app.get('/info', (req, res, next) => {
// //   res.send('This is a proxy service which proxies to redsalud APIs.')
// // })
// // // Authorization
// // app.use('', (req, res, next) => {
// //   if (req.headers.authorization) {
// //     next()
// //   } else {
// //     res.sendStatus(403)
// //   }
// // })

// // // Proxy endpoints

// // app.use(
// //   '/qaadp',
// //   createProxyMiddleware({
// //     target: API_SERVICE_QAADP,
// //     changeOrigin: true,
// //     pathRewrite: {
// //       [`^/qaadp`]: '',
// //     },
// //   })
// // )

// // // Start the Proxy
// // app.listen(PORT, HOST, () => {
// //   console.log(`Starting Proxy at ${HOST}:${PORT}`)
// // })
