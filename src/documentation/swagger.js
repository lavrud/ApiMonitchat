const swaggerAutogen = require('swagger-autogen')({
  openapi: '3.0.0',
  language: 'pt-BR'
})

const doc = {
  info: {
    version: '1.0.0',
    title: 'Api Monitchat - SCMV',
    description: 'Api de agendamentos de pacientes da Santa Casa de Vitória'
  },
  servers: [
    {
      url: 'http://localhost:3436'
    },
    {
      url: 'https://localhost:3436'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: "Enter your JWT token in the format '<token>'"
      }
    }
  }
}

const outputFile = './swagger.json'
const routes = ['../routes/router.js']

swaggerAutogen(outputFile, routes, doc)
