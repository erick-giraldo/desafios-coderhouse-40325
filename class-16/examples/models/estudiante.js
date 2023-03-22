import mongoose from 'mongoose'

const estudiante = new mongoose.Schema({
  nombre: { type: String, require: true },
  apellido: { type: String, require: true },
  edad: { type: Number, require: true },
  dni: { type: String, require: true, unique: true },
  cursos: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Curso' }], default: [] },
}, { timestamps: true })

estudiante.pre('find', function () {
  this.populate('cursos')
})

export default mongoose.model('Estudiante', estudiante)