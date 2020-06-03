import { Request, Response } from 'express'

class PointsController {
  async create(request: Request, response: Response) {
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

    const point = {
      image: 'image-fake',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    }

    const inserted_ids = await transaction('points').insert(point).returning('id')
    const point_id = inserted_ids[0]

    const pointItems = items.map((item_id: number) => ({ item_id, point_id }))

    await transaction('point_items').insert(pointItems)

    return response.json({
      id: point_id,
      ...point
    })
  }
}

export default PointsController
