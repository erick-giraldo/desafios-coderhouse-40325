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
    ttl: 60,
  }),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
}))

app.get('/login', (req, res) => {
  if (req.session.name && req.session.email) {
    req.session.counter++
    res.send(`<h1>Hola ${req.session.name} (${req.session.email}), gracias por ingresar nuevamente</h1>`)
  } else {
    req.session.name = req.query.name
    req.session.email = req.query.email
    res.send(`<h1>Te damos la bienvenida</h1>`)
  }
})

export default app
