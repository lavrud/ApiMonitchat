const express = require('express')
const router = express.Router()

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../documentation/swagger.json')

router.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const { authenticate } = require('../middleware/authenticate')

const { generateToken } = require('../middleware/generateToken')
const { verifyToken } = require('../middleware/verifyToken')

router.post('/api/generate-token', generateToken)
router.post('/api/verify-token', verifyToken)

const { allPacients } = require('../controller/allPacientsController')
const { getPacient } = require('../controller/patientController')
const { futureAppointments } = require('../controller/futureAppointmentsController')

router.get('/api', authenticate, allPacients)
router.get('/api/pacient', authenticate, getPacient)
router.get('/api/appointments', authenticate, futureAppointments)

module.exports = router
