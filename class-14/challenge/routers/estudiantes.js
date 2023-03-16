import { Router } from 'express'

import EstudiantesController from '../controllers/estudiantes.js'

const router = Router()

router
  .post('/estudiantes', EstudiantesController.create)
  .get('/estudiantes', EstudiantesController.get)
  .get('/estudiantes/:id', EstudiantesController.getById)
  .put('/estudiantes/:id', EstudiantesController.updateById)
  .delete('/estudiantes/:id', EstudiantesController.deleteById)

export default router