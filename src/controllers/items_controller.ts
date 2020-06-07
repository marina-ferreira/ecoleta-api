import { Request, Response } from 'express'

class ItemsController {
  async index(request: Request, response: Response) {
    const db = request.app.get('db')
    const items = await db('items').select('*')
    const serializedItems = items.map(item => ({
      id: item.id,
      title: item.title,
      image_url: `http://192.168.1.34:3333/uploads/${item.image}`
    }))

    return response.json(serializedItems)
  }
}

export default ItemsController
