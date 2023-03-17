import { Router } from 'express'

import estudiantesRouter from './estudiantes.js'

const router = Router()

router.use('/estudiantes', estudiantesRouter)

export default router
