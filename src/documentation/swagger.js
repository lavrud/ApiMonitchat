const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'})

const doc = {
  info: {
    title: 'Api Monichat - SCMV',
    description: 'Api de agendamentos de pacientes da Santa Casa de Vitória'
  },
  host: 'localhost:5000',
  schemes: ['http', 'https']
}

const outputFile = './swagger.json'
const routes = ['../routes/router.js']

swaggerAutogen(outputFile, routes, doc).then(() => {
  require('../routes/router')
})
