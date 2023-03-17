import http from 'http'

import app from './app.js'

const server = http.createServer(app)
const PORT = process.env.NODE_PORT || 8080
const ENV = process.env.NODE_ENV || 'local'

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}/ in ${ENV} environment.`)
})
