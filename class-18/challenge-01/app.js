import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(cookieParser(process.env.COOKIE_SECRET))

app.post('/set-cookie', (req, res) => {
  console.log('req.body', req.body);
  const { body: { name, email } } = req
  res.cookie(name, email, { maxAge: 10000 })
  res.redirect('/')
})

app.get('/get-cookie', (req, res) => {
  res.status(200).json(req.cookies)
})


export default app
