require('dotenv').config()
const express = require('express')
const router = express.Router()
const urlAPI = process.env.URL_API

// Documentação Swagger OpenAPI
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../schemas/swagger.json')
router.use(`${urlAPI}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Aplicação API Monichat
const { getApiData } = require('../controllers/getApiDataController')
const { getPacient } = require('../controllers/getPatientController')
router.get(`${urlAPI}`, getApiData)
router.get(`${urlAPI}/pacient`, getPacient)

// Token JWT
router.post(`${urlAPI}/auth`, (req, res) => {
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
})

module.exports = router
