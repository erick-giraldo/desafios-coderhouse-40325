import StudentModel from '../models/student.js'
import CommonsUtils from '../utils/commons.js'

class StudentsController {
  static get(query) {
    const { limit = 10, page = 1, sort } = query
    const opts = { limit, page }
    if (sort === 'asc' || sort === 'desc') {
      opts.sort = { grade: sort }
    }
    return StudentModel.paginate(CommonsUtils.getFilter(query), opts)
  }
}

export default StudentsController