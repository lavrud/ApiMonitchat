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
  host: 'localhost:5000',
  schemes: ['http', 'https'],
  securityDefinitions: {
    BearerAuth: {
      type: 'Bearer',
      name: 'Authorization',
      in: 'header',
    }
  },
  components: {
    securitySchemes:{
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        description: "Enter your JWT token in the format 'Bearer <token>'"
        }
    }
}
}

const outputFile = './swagger.json'
const routes = ['../routes/router.js']

swaggerAutogen(outputFile, routes, doc)
