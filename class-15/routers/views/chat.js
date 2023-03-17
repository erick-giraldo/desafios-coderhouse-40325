import { Router } from 'express'

import MensajeModel from '../../models/mensaje.js'

const router = Router()

router.get('/', async (req, res) => {
  const mensajes = await MensajeModel.find()
  res.render('chat', { mensajes })
})

export default router