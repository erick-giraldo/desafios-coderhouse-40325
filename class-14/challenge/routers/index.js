import {Router} from 'express'

const router = Router()

router.get('/', (_, res) => {
  res.send('<h1>Hello world!</h1>')
})

export default router