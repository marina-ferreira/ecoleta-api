import express from 'express'
import multer from 'multer'
import multerConfig from './config/router'

import PointsController from './controllers/points_controller'
import ItemsController from './controllers/items_controller'

const routes = express.Router()
const upload = multer(multerConfig)

const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.get('/points', pointsController.index)
routes.post('/points', upload.single('image'), pointsController.create)
routes.get('/points/:id', pointsController.show)

export default routes
