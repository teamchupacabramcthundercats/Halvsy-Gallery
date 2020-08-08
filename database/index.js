const models = require('./models/getImages.js');
const { db } = require('./connection.js')

module.exports = {
  models: models,
  db: db
}


