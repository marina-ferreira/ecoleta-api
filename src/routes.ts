import express from 'express'
import multer from 'multer'
import { celebrate, Joi } from 'celebrate'

import multerConfig from './config/router'
import PointsController from './controllers/points_controller'
import ItemsController from './controllers/items_controller'

const routes = express.Router()
const upload = multer(multerConfig)

const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)
routes.post(
  '/points',
  upload.single('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required(),
      items: Joi.string().required()
    })
  }, {
    abortEarly: false,
  }),
  pointsController.create
)

export default routes
