const express = require('express')
const router = express.Router()

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../documentation/swagger.json')

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const { authenticate } = require('../middleware/authenticate')

const { generateToken } = require('../middleware/generateToken')
const { verifyToken } = require('../middleware/verifyToken')

router.post('/api/generate-token', generateToken)
router.post('/api/verify-token', verifyToken)

const { allPatients } = require('../controller/allPatientsController')
const { getPatient } = require('../controller/patientController')
const { futureAppointments } = require('../controller/futureAppointmentsController')

router.get('/api', authenticate, allPatients)
router.get('/api/patients', authenticate, getPatient)
router.get('/api/appointments', futureAppointments)

module.exports = router
