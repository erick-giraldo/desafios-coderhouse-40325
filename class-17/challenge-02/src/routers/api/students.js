import { Router } from 'express'
import StudentsController from '../../controllers/students.js'
import CommonsUtils from '../../utils/commons.js'

const router = Router()

router.get('/', async (req, res) => {
  const { query } = req
  const { sort }= query
  const result = await StudentsController.get(query)
  res.status(200).json(CommonsUtils.buildResult({ ...result, sort }))
})

export default router