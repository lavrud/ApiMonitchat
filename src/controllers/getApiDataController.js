const { SelectPerPage } = require('../models/dataModel')

async function getApiData(req, res) {
  try {
    const data = await SelectPerPage(req)
    const apiData = data.map((row) => ({
      CD_PACIENTE: row.CD_PACIENTE,
      NM_PACIENTE: row.NM_PACIENTE,
      NR_CPF: row.NR_CPF,
      DT_NASCIMENTO: row.DT_NASCIMENTO,
      IDADE: row.IDADE,
      DATA_AGENDA: row.DATA_AGENDA,
      HORA_AGENDA: row.HORA_AGENDA,
      CD_MULTI_EMPRESA: row.CD_MULTI_EMPRESA,
      DS_MULTI_EMPRESA: row.DS_MULTI_EMPRESA,
      CD_PRESTADOR: row.CD_PRESTADOR,
      NM_PRESTADOR: row.NM_PRESTADOR,
      CD_RECURSO_CENTRAL: row.CD_RECURSO_CENTRAL,
      DS_RECURSO_CENTRAL: row.DS_RECURSO_CENTRAL
    }))

    res.json(apiData)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Erro ao obter os dados.')
  }
}

module.exports = { getApiData }
