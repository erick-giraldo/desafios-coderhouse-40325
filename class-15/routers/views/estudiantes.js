import { Router } from 'express'

import EstudianteModel from '../../models/estudiante.js'

const router = Router()

router.get('/', async (req, res) => {
  const estudiantes = await EstudianteModel.find()
  res.render('estudiantes', { estudiantes: estudiantes.map(es =>  es.toObject()) })
})

export default router