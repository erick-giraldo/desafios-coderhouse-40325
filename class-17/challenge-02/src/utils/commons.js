import config from '../config/index.js'

export default class CommonsUtils {
  static buildResult(opts) {
    const {
      docs,
      limit,
      totalPages,
      page,
      hasPrevPage,
      hasNextPage,
      prevPage,
      nextPage,
      sort,
    } = opts
    return {
      status: 'success',
      payload: docs,
      totalPages,
      prevPage,
      nextPage,
      page,
      hasPrevPage,
      hasNextPage,
      prevLink: !hasPrevPage ? null : `${config.baseUrl}/students?page=${prevPage}&limit=${limit}${sort ? `&sort=${sort}` : ''}`,
      nextLink: !hasNextPage ? null : `${config.baseUrl}/students?page=${nextPage}&limit=${limit}${sort ? `&sort=${sort}` : ''}`,
      sort,
      sortLink: `${config.baseUrl}/students?page=${page}&limit=${limit}&sort=${sort === 'asc' ? 'desc' : 'asc'}`
    }
  }

  static getFilter(query = {}) {
    const { email, group } = query
    const filter = {}
    if (email) {
      filter.email = email
    }
    if (group) {
      filter.group = group
    }
    return filter
  }
} 