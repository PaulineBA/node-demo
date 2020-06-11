const models = require('../models')
const booksSerializer = require('../serializers/booksSerializer')

const booksControllers = {
  async index(req, res) {
    const eachSerializer = booksSerializer.index()
      const booksIndex = await models.Book.findAll(eachSerializer)
    res.json({books: booksIndex})
    

  }
}
module.exports = booksControllers