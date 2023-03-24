import express from 'express'
import hbs from 'hbs'
import path from 'path'
import { fileURLToPath } from 'url'
import routers from './routers/index.js'
import { init } from './db/mongodb.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

await init()

hbs.registerHelper('isDisabled', function (value, opts) {
  return !value ? opts.fn(this) : opts.inverse(this)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', routers)

export default app
