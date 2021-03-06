let todosData = require('./data')

const todosMiddleware = {
  // ---------------------------------------------------------------------------
  // Get all users
  get: (req, res, next) => {
    console.log(process.env.MONGODB_URI)

    todosData
      ? res.send({
          message: 'Get all todos',
          data: todosData
        })
      : res.status(404).send({
          message: 'Get all todos failed'
        })
  }
}

module.exports = todosMiddleware
