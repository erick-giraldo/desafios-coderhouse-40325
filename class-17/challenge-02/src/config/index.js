
export default {
  baseUrl: process.env.BASE_URL || 'http://localhost:8080',
  port: process.env.NODE_PORT || 8080,
  env: process.env.NODE_ENV || 'local',
  db: {
    mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce',
  },
}