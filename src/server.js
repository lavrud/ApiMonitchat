// env
require('dotenv').config()

// express
const express = require('express')
const app = express()

// Port configuration
const PORT = process.env.PORT

// Base URL configuration
const BASE_URL = process.env.BASE_URL

// API URL configuration
const URL_API = process.env.URL_API

// enable json parser
app.use(express.json())

// cors
const cors = require('cors')

// const whitelist = ['http://localhost:5000'] // Lista de IPs permitidos

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

app.use(cors())

// router
const router = require('./routes/router')

app.use(router)

app.listen(PORT, () => {
  console.log(`Server running on port ${BASE_URL}:${PORT}${URL_API}`)
  console.log(`Server running on port ${BASE_URL}:${PORT}${URL_API}-docs`)
})
