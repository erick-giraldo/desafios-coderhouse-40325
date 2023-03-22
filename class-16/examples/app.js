import {init} from './db/mongodb.js'
import CursoModel from './models/curso.js'
import EstudianteModel from './models/estudiante.js'

await init()

/*const estudiante = await EstudianteModel.create({
  nombre: "Ernesto",
  apellido: "Rojas",
  edad: 32,
  dni: "123546",
  //cursos: [],
})

console.log('estudiante', estudiante);

const curso = await CursoModel.create({
  nombre: "Programacion Backend",
  descripcion: "Programacion Backend",
  dificultad: 5,
  profesor: "Ana María Ruíz",
})

console.log('curso', curso); */

// 641a3e22619981f4b01c2af8 curso

// 641a3e21619981f4b01c2af6 estudiante

/* const estudiante = await EstudianteModel.findById('641a3e21619981f4b01c2af6')

estudiante.cursos.push('641a3e22619981f4b01c2af8')

await EstudianteModel.updateOne({_id: '641a3e21619981f4b01c2af6'}, estudiante) */

const estudiante = await EstudianteModel.find({_id: '641a3e21619981f4b01c2af6'})

console.log('estudiante', JSON.stringify(estudiante, null, 2));