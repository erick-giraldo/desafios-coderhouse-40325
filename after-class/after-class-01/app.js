import express from 'express'
import {emit} from './socket.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))

app.post('/send-message', (req, res) => {
  const { body: { fullname, message } } = req
  emit({ fullname, message })
  res.status(200).end()
})

export default app
