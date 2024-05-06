const { SelectPerPagePacient } = require('../models/pacientModel')

const getPacient = async (req, res) => {
  try {
    const pacientData = await SelectPerPagePacient(req)
    
    // Verificar se pacientData não é nulo e se tem um array de resultados
    if (pacientData && pacientData.length > 0) {
      const pacient = pacientData.map((row) => {
        return {
          CD_PACIENTE: row.CD_PACIENTE,
          NM_PACIENTE: row.NM_PACIENTE
        }
      })
  
      res.json({ pacient })
    } else {
      // Caso não haja dados, retornar um array vazio
      res.json({ pacient: [] })
    }
  } catch (error) {
    console.error('Error executing query:', error)
    res.status(500).send('Erro ao obter os dados.')
  }
}

module.exports = { getPacient }
