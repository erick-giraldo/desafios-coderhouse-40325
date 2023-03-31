import express from 'express'
import expressSession from 'express-session'
import MongoStore from 'connect-mongo'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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
