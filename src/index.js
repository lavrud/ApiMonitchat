// env
require('dotenv').config()

// express
const express = require('express')
const app = express()

// enable json parser
app.use(express.json())

// cors
const cors = require('cors')
app.use(cors())

// helmet
const helmet = require('helmet')
app.use(helmet())

// router
const router = require('./routes/router')
app.use(router)

// Port configuration
const PORT = process.env.PORT_DEV || process.env.PORT_PROD

// Base URL configuration
const BASE_URL = process.env.BASE_URL_DEV || process.env.BASE_URL_PROD

// server
app.listen(PORT, () => {
  console.log(`Server running on ${BASE_URL}:${PORT}${process.env.URL_API}`)
  console.log(`Swagger docs: ${BASE_URL}:${PORT}/docs`)
})
