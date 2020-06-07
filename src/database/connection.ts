import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

const connection = knex({
  client: 'pg',
  connection: {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  }
})

export default connection
