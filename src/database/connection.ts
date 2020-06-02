import knex from 'knex'

const connection = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'ecoleta-dev'
  }
})

export default connection
