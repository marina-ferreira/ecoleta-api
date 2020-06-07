import { Request, Response } from 'express'

class PointsController {
  async index(request: Request, response: Response) {
    const db = request.app.get('db')
    const { headers: { host }, protocol } = request
    const baseUrl = `${protocol}://${host}`
    const { city, uf, items } = request.query
    const parsedItems = String(items)
      .split(',')
      .map(item => Number(item.trim()))

    const points = await db('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*')

    const serializedPoints = points.map(point => ({
      ...point,
      image_url: `${baseUrl}/uploads/${point.image}`
    }))

    return response.json(serializedPoints)
  }

  async create(request: Request, response: Response) {
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
      image: request.file.filename,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    }

    const db = request.app.get('db')
    const transaction = await db.transaction()
    const inserted_ids = await transaction('points').insert(point).returning('id')
    const point_id = inserted_ids[0]
    const pointItems = items
      .split(',')
      .map((item: string) => Number(item.trim()))
      .map((item_id: number) => ({ item_id, point_id }))

    await transaction('point_items').insert(pointItems)
    await transaction.commit()

    return response.json({
      id: point_id,
      ...point
    })
  }

  async show(request: Request, response: Response) {
    const { id } = request.params
    const { headers: { host }, protocol } = request
    const baseUrl = `${protocol}://${host}`
    const db = request.app.get('db')
    const point = await db('points').where('id', id).first()
    const items = await db('items')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', id)

    if (!point) {
      return response.status(404).json({ message: 'Point not found' })
    }

    const serializedPoint ={
      ...point,
      image_url: `${baseUrl}/uploads/${point.image}`
    }

    return response.json({ point: serializedPoint, items })
  }
}

export default PointsController
