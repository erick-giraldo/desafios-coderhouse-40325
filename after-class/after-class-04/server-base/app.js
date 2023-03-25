import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

import { init } from './db/mongodb.js'
import routers from './routers/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

await init()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', routers)

export default app
