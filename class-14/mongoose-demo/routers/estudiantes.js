import {Router} from 'express'

import EstudianteModel from '../models/estudiante.js'

const router = Router()
// CREATE
router.post('/estudiantes', async (req, res) => {
  const { body } = req
  const result = await EstudianteModel.create(body)
  res.status(201).json(result)
})
// READ
router.get('/estudiantes', async (req, res) => {
  const result = await EstudianteModel.find()
  res.status(200).json(result)
})
// UPDATE
router.put('/estudiantes/:id', async (req, res) => {
  const {
    params: { id },
    body,
  } = req
  await EstudianteModel.updateOne({ _id: id }, { $set: body })
  res.status(204).end()
})
// DELETE
router.delete('/estudiantes/:id', async (req, res) => {
  const {
    params: { id },
  } = req
  await EstudianteModel.deleteOne({ _id: id })
  res.status(204).end()
})
export default router