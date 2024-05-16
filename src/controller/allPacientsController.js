const { selectAllPacients } = require('../model/allPacientsModel')

const allPacients = async (req, res) => {
  try {
    const AllPacients = await selectAllPacients(req)
    const allPacients = AllPacients.map((allpacients) => ({
      CD_PACIENTE: allpacients.CD_PACIENTE,
      NM_PACIENTE: allpacients.NM_PACIENTE,
      NR_CPF: allpacients.NR_CPF,
      DT_NASCIMENTO: allpacients.DT_NASCIMENTO,
      IDADE: allpacients.IDADE,
      DATA_AGENDA: allpacients.DATA_AGENDA,
      HORA_AGENDA: allpacients.HORA_AGENDA,
      CD_MULTI_EMPRESA: allpacients.CD_MULTI_EMPRESA,
      DS_MULTI_EMPRESA: allpacients.DS_MULTI_EMPRESA,
      CD_PRESTADOR: allpacients.CD_PRESTADOR,
      NM_PRESTADOR: allpacients.NM_PRESTADOR,
      CD_RECURSO_CENTRAL: allpacients.CD_RECURSO_CENTRAL,
      DS_RECURSO_CENTRAL: allpacients.DS_RECURSO_CENTRAL
    }))

    res.json(allPacients)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Erro ao obter os dados.')
  }
  /*
  
    #swagger.tags = ['Monichat']
    
    #swagger.security = [{
      "bearerAuth": []
    }]

  */
}

module.exports = { allPacients }
