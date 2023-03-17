import { Router } from 'express'

import estudiantesRouter from './estudiantes.js'
import mensajessRouter from './mensajes.js'

const router = Router()

router.use('/estudiantes', estudiantesRouter)
router.use('/mensajes', mensajessRouter)

export default router
