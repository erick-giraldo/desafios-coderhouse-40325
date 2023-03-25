import mongoose from 'mongoose'

export const init = async () => {
  try {
    const URI = 'mongodb+srv://developer:Xov2qxFamSYTkjDb@cluster0.c5scq6r.mongodb.net/pizza?retryWrites=true&w=majority'
    await mongoose.connect(URI)
    console.log('Database connected.')
  } catch (error) {
    console.error('Error to connecto to database', error.message)
  }
}