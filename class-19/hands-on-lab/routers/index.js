import { Router } from 'express'

import sessionsApiRouter from './api/sessions.js'
import sessionsViewsRouter from './views/sessions.js'

const router = Router()

router.use('/api/sessions', sessionsApiRouter)
router.use('/', sessionsViewsRouter)

export default router