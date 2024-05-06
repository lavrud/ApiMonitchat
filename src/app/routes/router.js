require('dotenv').config()
const express = require('express')
const router = express.Router()
const urlAPI = process.env.URL_API

// Documentação Swagger OpenAPI
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../../swagger.json')

router.use(`${urlAPI}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Aplicação API Monichat
const { getApiData } = require('../controllers/getApiDataController')
const { getPacient } = require('../controllers/getPatientController')

router.get(`${urlAPI}`, getApiData)
router.get(`${urlAPI}/pacient`, getPacient)

// Token JWT
const { authentication } = require('../controllers/getAuthController')

router.get(`${urlAPI}/auth`, authentication)

module.exports = router
