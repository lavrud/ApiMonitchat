const express = require('express')
const router = express.Router()

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../schemas/swagger.json')

router.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const { getApiData } = require('../controllers/getApiDataController')
const { getPacient } = require('../controllers/getPatientController')

router.get('/api', getApiData)
router.get('/api/pacient', getPacient)

module.exports = router
