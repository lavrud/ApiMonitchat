const jwt = require('jsonwebtoken')
const privateKey = process.env.SECRET_KEY
const privateUserKey = process.env.USER_KEY

const checkUsername = (req, res, next) => {
  const { username } = req.body

  if (username !== privateUserKey) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  next()
}

const authenticate = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Authorization is missing.' })
  }

  const token = req.headers.authorization.split(' ')[1]

  try {
    const decoded = await jwt.verify(token, privateKey, privateUserKey)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed.' })
  }
}

module.exports = { authenticate, checkUsername }
