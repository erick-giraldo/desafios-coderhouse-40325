import mongoose from 'mongoose'

const estudiante = new mongoose.Schema({
  nombre: { type: String, require: true },
  apelldo: { type: String, require: true },
  edad: { type: Number, require: true },
  dni: { type: String, require: true, unique: true },
  curso: { type: String, require: true },
  nota: { type: Number, require: true },
}, { timestamps: true })

export default mongoose.model('Estudiante', estudiante)