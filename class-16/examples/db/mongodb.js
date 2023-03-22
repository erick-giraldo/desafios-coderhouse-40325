import mongoose from 'mongoose'

export const init = async () => {
  try {
    const URI = 'mongodb://localhost:27017/colegio'
    await mongoose.connect(URI)
    console.log('Database connected.')
  } catch (error) {
    console.error('Error to connecto to database', error.message)
  }
}