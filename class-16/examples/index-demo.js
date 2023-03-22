import {init} from './db/mongodb.js'
import UserModel from './models/user.js'

await init()

const result = await UserModel.find({first_name: 'Celia'}).explain('executionStats')

console.log('result', result);
