import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const user = new mongoose.Schema({
  first_name: { type: String, index: true },
  last_name: String,
  email: { type: String, unique: true },
  gender: String,
}, { timestamps: true })

user.plugin(mongoosePaginate)

export default mongoose.model('User', user)