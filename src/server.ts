import express from 'express'
import path from 'path'

import routes from './routes'
import connection from './database/connection'

const app = express()

app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.set("db", connection)

app.listen(3333)
