import http from 'http'

import config from './config/index.js'
import app from './app.js'

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`Server running in http://localhost:${config.port}/ in ${config.env} environment.`)
})
