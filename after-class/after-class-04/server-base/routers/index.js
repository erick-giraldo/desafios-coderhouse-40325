import { Router } from 'express'

import studentsViewRoutes from './views/students.js'
import studentsApiRoutes from './api/students.js'

const router = Router()

router.use('/api/students', studentsApiRoutes)

router.use('/students', studentsViewRoutes)

export default router