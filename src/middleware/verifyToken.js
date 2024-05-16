const jwt = require('jsonwebtoken')

const privateKey = process.env.SECRET_KEY

const verifyToken = async (req, res) => {
  /* 
    #swagger.ignore = true
    #swagger.tags = ['Monichat']
    #swagger.security = [{
    "bearerAuth": []
    }] 
  */
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Authorization was not found.' })
  }

  const validateToken = req.headers.authorization.split(' ')[1]

  try {
    const decoded = jwt.verify(validateToken, privateKey)
    console.log(decoded)

    if (decoded.username !== process.env.USER_KEY) {
      return res.status(401).json({ message: 'Unauthorized.' })
    }

    res.status(200).json({ message: 'Token is valid.', decoded })
  } catch (error) {
    res.status(401).json({ message: 'Token is invalid.', error })
  }
}

module.exports = { verifyToken }
