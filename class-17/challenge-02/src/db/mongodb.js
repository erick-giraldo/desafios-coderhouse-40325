import mongoose from 'mongoose'

import config from '../config/index.js'

export const init = async () => {
  try {
    await mongoose.connect(config.db.mongodbUri)
    console.log('Database connected.')
  } catch (error) {
    console.error('Error to connecto to database', error.message)
  }
}