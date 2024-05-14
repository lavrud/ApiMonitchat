const checkTokenExpiration = (req, res, next) => {
  if (req.user.exp < Date.now() / 1000) {
    return res.status(401).json({ message: 'Token expired.' })
  }
  next()
}

module.exports = { checkTokenExpiration }
