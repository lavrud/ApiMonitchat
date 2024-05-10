const express = require('express')
const router = express.Router()

// Token JWT
// const { authentication } = require('../middleware/auth')

// router.get('/api/auth', authentication)

// Aplicação API Monichat
// const { redirectRoute } = require('../controller/redirectRoute')
const { allPacients } = require('../controller/allPacientsController')
const { getPacient } = require('../controller/patientController')
const {
  futureAppointments
} = require('../controller/futureAppointmentsController')

// Rota de redirecionamento
// router.get('/', redirectRoute)

// Rota da API
router.get('/api', allPacients)
router.get('/api/pacient', getPacient)
router.get('/api/patient/future-appointments', futureAppointments)

// Documentação Swagger OpenAPI
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../documentation/swagger.json')

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = router
