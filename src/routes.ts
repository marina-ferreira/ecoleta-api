import express from 'express'

import PointsController from './controllers/points_controller'

const routes = express.Router()
const pointsController = new PointsController()

routes.get('/items', async (request, response) => {
  const db = request.app.get('db')
  const items = await db('items').select('*')
  const serializedItems = items.map(item => ({
    id: item.id,
    title: item.title,
    image_url: `http://localhost:3333/uploads/${item.image}`
  }))

  return response.json(serializedItems)
})

routes.post('/points', pointsController.create)

export default routes
