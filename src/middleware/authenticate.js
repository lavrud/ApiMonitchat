const jwt = require('jsonwebtoken')
const privateKey = process.env.SECRET_KEY

const authenticate = (req, res, next) => {
  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).json({ message: 'Unauthorized.' })
  }

  const token = authToken.split(' ')[1]

  try {
    jwt.verify(token, privateKey, (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Token has expired.', error: err })
        }
        return res.status(401).json({ message: 'Token is invalid' })
      }

      req.user = decoded
      next()
    })
  } catch (error) {
    console.error('Error authenticating user:', error)
    res.status(500).json({ message: 'Error authenticating user.', error })
  }
}

module.exports = { authenticate }
