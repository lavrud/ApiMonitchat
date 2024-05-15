const express = require('express')
const router = express.Router()

// Token JWT
const { generateToken, verifyToken } = require('../middleware/jwtTokenMiddleware')
const { authUser, authenticate } = require('../middleware/authMiddleware')

// Rota para gerar token JWT
router.get('/api/generate-token', authUser, generateToken)

// Rota para verificar token JWT
router.get('/api/verify-token', authenticate, verifyToken)

// Rotas da aplicação API Monichat
const { allPacients } = require('../controller/allPacientsController')
const { getPacient } = require('../controller/patientController')
const { futureAppointments } = require('../controller/futureAppointmentsController')

// Rota da API para obter todos os pacientes
router.get('/api', authenticate, allPacients)

// Rota da API para obter um paciente específico
router.get('/api/pacient', authenticate, getPacient)

// Rota da API para obter os próximos agendamentos de um paciente
router.get('/api/patient/future-appointments', authenticate, futureAppointments)

// Documentação Swagger OpenAPI
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../documentation/swagger.json')

// Rota para acessar a documentação Swagger
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = router
