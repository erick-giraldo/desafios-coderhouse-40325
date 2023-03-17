import EstudianteModel from '../models/estudiante.js'

class EstudiantesController {

  static async create(req, res) {
    const { body, file } = req
    const estudiante = {
      ...body,
      avatar: `/static/imgs/${file.originalname}`,
    }
    const result = await EstudianteModel.create(estudiante)
    res.status(201).json(result)
  }

  static async get(req, res) {
    const result = await EstudianteModel.find()
    res.status(200).json(result)
  }

  static async getById(req, res) {
    const { params: { id } } = req
    const result = await EstudianteModel.findById(id)
    if (!result) {
      return res.status(404).end()
    }
    res.status(200).json(result)
  }

  static async updateById(req, res) {
    const { params: { id }, body } = req
    await EstudianteModel.updateOne({ _id: id }, { $set: body })
    res.status(204).end()
  }

  static async deleteById(req, res) {
    const { params: { id } } = req
    await EstudianteModel.deleteOne({ _id: id })
    res.status(204).end()
  }

}

export default EstudiantesController