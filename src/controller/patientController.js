const { SelectPerPagePacient } = require('../model/pacientModel')

const getPacient = async (req, res) => {
  try {
    const pacientData = await SelectPerPagePacient(req)

    if (pacientData && pacientData.length > 0) {
      const pacient = pacientData.map((pacientdata) => {
        return {
          CD_PACIENTE: pacientdata.CD_PACIENTE,
          NM_PACIENTE: pacientdata.NM_PACIENTE
        }
      })

      res.json({ pacient })
    } else {
      res.json({ pacient: [] })
    }
  } catch (error) {
    console.error('Error executing query:', error)
    res.status(500).send('Erro ao obter os dados.')
  }
  /*
  
    #swagger.tags = ['Monichat']
    
    #swagger.security = [{
      "bearerAuth": []
    }]

  */
}

module.exports = { getPacient }
