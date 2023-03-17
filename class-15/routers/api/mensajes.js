import { Router } from 'express'

import MensajesController from '../../controllers/mensajes.js'

const router = Router()

router
  .get('/', MensajesController.get)
  .post('/', MensajesController.create)
  .get('/:id', MensajesController.getById)
  .put('/:id', MensajesController.updateById)
  .delete('/:id', MensajesController.deleteById)

export default router