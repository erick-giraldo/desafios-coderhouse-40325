import express from 'express'
import expressSession from 'express-session'
import FileStore from 'session-file-store'

const app = express()

const fileStore = FileStore(expressSession)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(expressSession({
  store: new fileStore({
    path: './sessions',
    ttl: 100,
    retries: 0,
  }),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
}))

app.get('/', (req, res) => {
  if (req.session.counter && req.session.name) {
    req.session.counter++
    res.send(`<h1>${req.session.name} visitaste la página ${req.session.counter} veces</h1>`)
  } else {
    req.session.counter = 1
    req.session.name = req.query.name
    res.send(`<h1>Te damos la bienvenida</h1>`)
  }
})

export default app
