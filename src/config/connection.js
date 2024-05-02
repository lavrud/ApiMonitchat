const dbconfig = require('./configDatabase')
const oracledb = require('oracledb')

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

let clientOpts = {}
if (process.platform === 'win32') {
  // Windows
  clientOpts = { libDir: 'extras\\instantclient_21_13' }
} else if (process.platform === 'darwin' && process.arch === 'x64') {
  // macOS Intel
  clientOpts = { libDir: process.env.HOME + '/Downloads/instantclient_19_8' }
} // else on other platforms the system library search path
// must always be set before Node.js is started.

// enable Thick mode which is needed for SODA
oracledb.initOracleClient(clientOpts)
oracledb.autoCommit = true

const password = dbconfig.password

const executeQuery = async (sql) => {
  let connection
  try {
    connection = await oracledb.getConnection({
      user: dbconfig.user,
      password: password,
      connectString: dbconfig.connectString
    })

    const result = await connection.execute(sql)

    return result
  } catch (error) {
    console.error('Error executing query: ', error)
    return null
  } finally {
    if (connection) {
      try {
        await connection.close()
      } catch (error) {
        console.error('Error closing connection: ', error)
      }
    }
  }
}

module.exports = { executeQuery }
