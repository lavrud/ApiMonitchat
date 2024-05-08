require('dotenv').config()
const express = require('express')
const router = express.Router()
const urlAPI = process.env.URL_API

// Documentação Swagger OpenAPI
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')

router.use(`${urlAPI}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Aplicação API Monichat
const { redirectRoute } = require('../controller/redirectRoute')
const { allPacients } = require('../controller/allPacientsController')
const { getPacient } = require('../controller/patientController')
const { futureAppointments } = require('../controller/futureAppointmentsController')

// Rota de redirecionamento
router.get('/', redirectRoute)

// Rota da API
router.get(`${urlAPI}`, allPacients)
router.get(`${urlAPI}/pacient`, getPacient)
router.get(`${urlAPI}/patient/future-appointments`, futureAppointments)

// Token JWT
const { authentication } = require('../controller/authController')

router.get(`${urlAPI}/auth`, authentication)

module.exports = router
