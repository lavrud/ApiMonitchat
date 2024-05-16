// env
require('dotenv').config()

// express
const express = require('express')
const app = express()

// enable json parser
app.use(express.json())

// cors
const cors = require('cors')
app.use(cors({
  origin: '*',
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// helmet
const helmet = require('helmet')
app.use(helmet())

// router
const router = require('./routes/router')
app.use(router)


// Port configuration
const PORT = process.env.PORT

// Base URL configuration
const BASE_URL = process.env.BASE_URL

// API URL configuration
const URL_API = process.env.URL_API

// server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${BASE_URL}:${PORT}${URL_API}`)
  console.log(`Server running on port ${BASE_URL}:${PORT}${URL_API}/docs`)
})
