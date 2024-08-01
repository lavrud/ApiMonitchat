const jwt = require('jsonwebtoken')
const privateKey = process.env.SECRET_KEY

const verifyToken = async (req, res) => {
  // #swagger.ignore = true
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Authorization was not found.' })
  }

  const token = req.headers.authorization.split(' ')[1]

  try {
    const decoded = await jwt.verify(token, privateKey)

    res.status(200).json({ message: 'Token is valid.', decoded })
  } catch (error) {
    res.status(401).json({ message: 'Token is invalid.', error })
  }
}

module.exports = { verifyToken }
