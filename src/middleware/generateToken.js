const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid')

const privateKey = process.env.SECRET_KEY

const generateToken = async (req, res) => {
  /* 
    #swagger.ignore = true
    #swagger.tags = ['Monichat']
    #swagger.security = [{
    "bearerAuth": []
    }] 
  */
  const user = { sub: uuidv4(), username: process.env.USER_KEY }
  const expiresIn = '1d'
  const token = jwt.sign(user, privateKey, { expiresIn })
  try {
    res.status(200).json({ token })
  } catch (error) {
    res.status(401).json({ message: 'Token was not generated.', error })
  }
}

module.exports = { generateToken }
