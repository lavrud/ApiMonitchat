const authUser = async (req, res) => {
  try {
    const token = jwt.sign({ username: username }, process.env.JWT_SECRET)
    res.json({ token: token })
  } catch (error) {
    res.status(401).json({ message: 'Credenciais inválidas' })
  }
}

module.exports = { authUser }
