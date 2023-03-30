import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser(process.env.COOKIE_SECRET))

app.get('/set-cookie', (req, res) => {
  res.cookie('coderCookie', 'Esta es una cookie', { maxAge: 10000 })
  res.send('<h1>Set cookie!</h1>')
})

app.get('/get-cookie', (req, res) => {
  res.send(`<h1>${JSON.stringify(req.cookies)}</h1>`)
})

app.get('/delete-cookie', (req, res) => {
  res.clearCookie('coderCookie')
  res.send('<h1>Delete Cookie</h1>')
})

app.get('/set-cookie-signed', (req, res) => {
  res.cookie('signedCookie', 'Esta es una cookie signed', { maxAge: 10000, signed: true })
  res.send('<h1>Set cookie signed!</h1>')
})

app.get('/get-cookie-signed', (req, res) => {
  res.send(`<h1>${JSON.stringify(req.signedCookies)}</h1>`)
})

export default app
