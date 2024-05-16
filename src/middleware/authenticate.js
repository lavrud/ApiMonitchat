const authenticate = (req, res, next) => {
  if (req.headers.authorization) {
    return next()
  } else {
    return res.status(401).json({ message: 'Unauthorized.' })
  }
}

module.exports = { authenticate }
