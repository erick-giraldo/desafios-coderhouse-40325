import mongoose from 'mongoose'

const curso = new mongoose.Schema({
  nombre: { type: String, require: true },
  descripcion: { type: String, require: true },
  dificultad: { type: Number, require: true },
  profesor: { type: String, require: true },
}, { timestamps: true })

export default mongoose.model('Curso', curso)