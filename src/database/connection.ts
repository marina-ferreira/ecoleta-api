import knex from 'knex'

const connection = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'ecoleta_dev'
  }
})

export default connection
