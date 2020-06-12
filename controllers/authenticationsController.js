const jwt = require('jsonwebtoken')
const salt = 'this'

const authenticationsController = {
  async login(req, res) {
    const payload = req.body
    const token = await jwt.sign(payload, salt, {expiresIn: 36000})
   res.send({ token: `Bearer ${token}` })
 }
}

module.exports = authenticationsController