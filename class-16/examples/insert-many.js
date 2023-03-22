import {init} from './db/mongodb.js'
import UserModel from './models/user.js'
import fs from 'fs'

let data = await fs.promises.readFile('./users.json')

data = JSON.parse(data)

console.log('data', data.length);

await init()

await UserModel.insertMany(data)
