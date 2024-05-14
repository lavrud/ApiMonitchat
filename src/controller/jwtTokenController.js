const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid')

const privateKey = process.env.SECRET_KEY
const privateUserKey = process.env.USER_KEY
const authUser = { id: uuidv4(), username: privateUserKey }

const tokens = {}

const generateToken = async (req, res) => {
  const user = authUser
  const token = jwt.sign(user, privateKey, { expiresIn: '1d' })

  // Armazena o token e sua data de expiração
  tokens[token] = Date.now() + 60000 // 1 minuto em milissegundos

  res.status(200).json({ token })
}

const verifyToken = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Validation failed.' })
  }

  const token = req.headers.authorization.split(' ')[1]

  // Verifica se o token está na lista de tokens expirados
  if (tokens[token] && Date.now() > tokens[token]) {
    return res.status(401).json({ message: 'Token has expired.' })
  }

  try {
    const decoded = await jwt.verify(token, privateKey)
    res.status(200).json({ message: 'Token is valid.', decoded })
  } catch (error) {
    res.status(401).json({ message: 'Token is invalid.' })
  }
}

module.exports = { generateToken, verifyToken }
