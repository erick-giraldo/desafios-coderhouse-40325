import { Router } from 'express'

import StudentModel from '../../models/student.js'
import CommunsUtil from '../../utils/communs.js'

const router = Router()

router.get('/', async (req, res) => {
  const { query: { limit = 10, page = 1 } } = req
  const options = {
    limit,
    page,
  }
  const result = await StudentModel.paginate({}, options)
  res.json(CommunsUtil.buidResponse(result))
})

export default router