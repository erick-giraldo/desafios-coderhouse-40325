import express from 'express'
import expressSession from 'express-session'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(expressSession({
  secret: process.env.COOKIE_SECRET,
  resave: true,
  saveUninitialized: true,
}))

const auth = (req, res, next) => {
  if (req.session.email === 'jose@maria.com' && req.session.admin) {
    return next()
  }
  res.status(401).send('Error de autenticacion')
}

app.post('/login', (req, res) => {

  const { body: { email, password }} = req
  if (email !== 'jose@maria.com' || password !== '1234') {
    return res.send('login failed')
  }
  req.session.email = email
  req.session.admin = true
  res.send(`<h1>Login success!!!</h1>`)
})

app.get('/public-endpoint', (req, res) => {
  res.send('public endpoint')
})

app.get('/private-endpoint', auth, (req, res) => {
  res.send('private endpoint')
})


app.post('/logout', (req, res) => {
  req.session.destroy(error => {
    if (!error) {
      res.send('Logot OK')
    } else {
      res.send({status: 'Logout Error', body: error})
    }
  })
})

export default app
