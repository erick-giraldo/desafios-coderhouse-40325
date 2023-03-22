import mongoose from 'mongoose'

const user = new mongoose.Schema({
  first_name: { type: String, index: true },
  last_name: String,
  email: { type: String, unique: true },
  gender: String,
}, { timestamps: true })

export default mongoose.model('User', user)