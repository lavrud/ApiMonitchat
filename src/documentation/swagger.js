const swaggerAutogen = require('swagger-autogen')({
  openapi: '3.0.0',
  language: 'pt-BR'
})

const doc = {
  info: {
    version: '1.0.0',
    title: 'Api Monichat - SCMV',
    description: 'Api de agendamentos de pacientes da Santa Casa de Vitória'
  },
  servers: [
    {
      url: 'http://localhost:5000'
    },
    {
      url: 'https://localhost:5000'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: "Enter your JWT token in the format 'Bearer <token>'"
      }
    }
  }
}

const outputFile = './swagger.json'
const routes = ['../routes/router.js']

swaggerAutogen(outputFile, routes, doc)
