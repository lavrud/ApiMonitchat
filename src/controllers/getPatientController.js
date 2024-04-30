const { SelectPerPagePacient } = require('../models/pacientModel')

async function getPacient(req, res) {
  {
    try {
      const pacientData = await SelectPerPagePacient(req)
      const pacient = pacientData.map((row) => {
        return {
          CD_PACIENTE: row.CD_PACIENTE,
          NM_PACIENTE: row.NM_PACIENTE
        }
      })

      res.json({ pacient })
    } catch (error) {
      console.error(error.message)
      res.status(500).send('Erro ao obter os dados.')
    }
  }
}

module.exports = { getPacient }
