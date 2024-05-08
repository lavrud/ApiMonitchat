const { getFutureAppointments } = require('../model/futureAppointments')

const futureAppointments = async (req, res) => {
  try {
    const appointmentsData = await getFutureAppointments(req)

    if (appointmentsData && appointmentsData.length > 0) {
      const appointments = appointmentsData.map((appointmentdata) => {
        return {
          CD_PACIENTE: appointmentdata.CD_PACIENTE,
          NM_PACIENTE: appointmentdata.NM_PACIENTE,
          DATA_AGENDA: appointmentdata.DATA_AGENDA,
          HORA_AGENDA: appointmentdata.HORA_AGENDA
        }
      })

      res.json({ appointments })
    } else {
      res.json({ appointments: [] })
    }
  } catch (error) {
    console.error('Error executing query:', error)
    return res.status(500).send('Erro ao obter os dados.')
  }
}

module.exports = { futureAppointments }
