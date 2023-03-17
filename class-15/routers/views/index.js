import { Router } from 'express'

import estudiantesRouter from './estudiantes.js'
import chatRouter from './chat.js'

const router = Router()

router.use('/estudiantes', estudiantesRouter)
router.use('/chat', chatRouter)

export default router
