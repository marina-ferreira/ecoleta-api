import express from 'express'

const routes = express.Router()

routes.get('/items', async (request, response) => {
  const db = request.app.get('db')
  const items = await db('items').select('*')
  const serializedItems = items.map(item => ({
    title: item.title,
    image_url: `http://localhost:3333/uploads/${item.image}`
  }))

  return response.json(serializedItems)
})

export default routes
