require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const router = require('./routes/router')

const PORT = process.env.PORT
const BASE_URL = process.env.BASE_URL
const URL_API = process.env.URL_API

const whitelist = ['http://example.com'] // Lista de IPs permitidos

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`Server running on port ${BASE_URL}:${PORT}${URL_API}`)
  console.log(`Server running on port ${BASE_URL}:${PORT}${URL_API}/docs`)
})
