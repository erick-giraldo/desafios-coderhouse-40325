import { Router } from 'express'

import StudentModel from '../../models/student.js'
import CommunsUtil from '../../utils/communs.js'

const router = Router()

/*
sort=asc
sort=desc

sort=grade
sort=-grade
sort=email
sort=-email
*/

router.get('/', async (req, res) => {
  const { query: { limit = 10, page = 1, sort } } = req
  const options = {
    limit,
    page,
  }
  if (sort) {
    options.sort = { grade: sort }
  }
  const result = await StudentModel.paginate({}, options)
  res.render('students', CommunsUtil.buidResponse({ ...result, sort }))
})

export default router