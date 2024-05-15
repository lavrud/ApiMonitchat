const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid')

const privateKey = process.env.SECRET_KEY
const privateUserKey = process.env.USER_KEY
const authUser = { id: uuidv4(), username: privateUserKey }

let currentToken = null

const generateToken = async (req, res) => {
  

  currentToken = null

  const user = authUser
  const expiresIn = '1d'
  const token = jwt.sign(user, privateKey, { expiresIn })

  currentToken = token

  res.status(200).json({ token })
}

const verifyToken = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Validation failed.' })
  }

  const token = req.headers.authorization.split(' ')[1]

  if (token !== currentToken) {
    return res.status(401).json({ message: 'Token is invalid.' })
  }

  try {
    const decoded = await jwt.verify(token, privateKey)
    res.status(200).json({ message: 'Token is valid.', decoded })
  } catch (error) {
    res.status(401).json({ message: 'Token is invalid.' })
  }
}

module.exports = { generateToken, verifyToken }
