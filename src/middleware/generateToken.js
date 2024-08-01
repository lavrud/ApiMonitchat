const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid')

const privateKey = process.env.SECRET_KEY

const generateToken = async (req, res) => {
  // #swagger.ignore = true
  const user = { sub: uuidv4(), username: process.env.USER_KEY }
  const expiresIn = '1h'

  try {
    const token = jwt.sign(user, privateKey, { expiresIn })
    res.status(200).json({ token })
  } catch (error) {
    console.error('Error generating token:', error)
    res.status(500).json({ message: 'Error generating token.', error })
  }
}

module.exports = { generateToken }
