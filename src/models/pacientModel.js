const { executeQuery } = require('../config/connection')

async function SelectPerPagePacient(
  req,
  tableName = 'vdic_paciente_monitchat'
) {
  const page = req.query.page || 1
  const limit = 100
  const offset = (page - 1) * limit

  const data = await executeQuery(
    `SELECT * FROM ${tableName} OFFSET ${offset} ROWS FETCH NEXT ${limit} ROWS ONLY`
  )

  return data.rows
}

module.exports = { SelectPerPagePacient }
