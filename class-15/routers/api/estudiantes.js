import { Router } from 'express'

import { uploader } from '../../utils.js'
import EstudiantesController from '../../controllers/estudiantes.js'

const router = Router()

router
  .get('/', EstudiantesController.get)
  .post('/', uploader.single('avatar'), EstudiantesController.create)
  .get('/:id', EstudiantesController.getById)
  .put('/:id', EstudiantesController.updateById)
  .delete('/:id', EstudiantesController.deleteById)

export default router