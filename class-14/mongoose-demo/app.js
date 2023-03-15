import express from 'express'

import { init } from './db/mongodb.js'
import routerIndex from './routers/index.js'
import routerEstudiantes from './routers/estudiantes.js'

init()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', routerIndex, routerEstudiantes)

export default app
