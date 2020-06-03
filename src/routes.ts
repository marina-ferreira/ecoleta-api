import express from 'express'

const routes = express.Router()

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

routes.post('/points', async (request, response) => {
  const db = request.app.get('db')
  const transaction = await db.transaction()

  const {
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items
  } = request.body

  const inserted_ids = await transaction('points').insert({
    image: 'image-fake',
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf
  }).returning('id')

  const pointItems = items.map((item_id: number) => ({
    item_id,
    point_id: inserted_ids[0]
  }))

  await transaction('point_items').insert(pointItems)

  return response.json({ success: true })
})

export default routes
