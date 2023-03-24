import {init} from './db/mongodb.js'
import UserModel from './models/user.js'

await init()
/*
const page = 2
const limit = 10
const skip = (page - 1) * limit
// Page 1 - s 0 & l 10
const result = await UserModel.find({}).skip(skip).limit(limit)

console.log('result', result);
*/

const result = await UserModel.paginate({ gender: 'Female' }, { limit: 20, page: 2 })

console.log('result', result);
