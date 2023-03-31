import path from 'path'
import express from 'express'
import expressSession from 'express-session'
import MongoStore from 'connect-mongo'
import { fileURLToPath } from 'url'

import { init } from './db/mongodb.js'

import routers from './routers/index.js'

await init()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(expressSession({
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    mongoOptions: {},
    ttl: 20,
  }),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
}))

app.use('/', routers)

export default app
