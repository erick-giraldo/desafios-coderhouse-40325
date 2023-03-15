import mongoose from 'mongoose'

const estudiante = new mongoose.Schema({
  nombre: { type: String, require: true },
  apelldo: { type: String, require: true },
  correo: { type: String, require: true, unique: true },
  edad: { type: Number },
  status: { type: String, default: 'inactivo', enum: ['inactivo', 'activo'] },
}, { timestamps: true })

export default mongoose.model('Estudiante', estudiante)