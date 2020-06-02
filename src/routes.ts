import express from 'express'

const routes = express.Router()

routes.get('/', (request, response) => {
  response.json(['Marina', 'Ferreira', 'hohoho', 'oioioi', 'eieiei'])
})

export default routes
