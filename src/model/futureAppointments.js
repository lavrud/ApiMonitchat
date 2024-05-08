const { executeQuery } = require('../config/connection')

const getFutureAppointments = async (
  req,
  tableName = 'vdic_paciente_monitchat'
) => {
  const today = new Date().toLocaleDateString('pt-BR')
  const sql = `SELECT * FROM ${tableName} WHERE DATA_AGENDA >= TO_DATE('${today}', 'DD/MM/YYYY')`
  const data = await executeQuery(sql)
  return data.rows
}

module.exports = { getFutureAppointments }
