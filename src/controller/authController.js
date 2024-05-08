const authentication = async (req, res) => {
  // Aqui você deve validar as credenciais do usuário
  const username = req.body.username
  const password = req.body.password

  // Exemplo de validação simples (não use em produção)
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username: username }, process.env.JWT_SECRET)
    res.json({ token: token })
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' })
  }
}

module.exports = { authentication }
