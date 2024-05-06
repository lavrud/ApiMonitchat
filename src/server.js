require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./app/routes/router')

const PORT = process.env.PORT
const BASE_URL = process.env.BASE_URL
const URL_API = process.env.URL_API

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`Server running on port ${BASE_URL}:${PORT}${URL_API}`)
  console.log(`Server running on port ${BASE_URL}:${PORT}${URL_API}/docs`)
})
