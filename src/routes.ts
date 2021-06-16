import Router from 'express'
import ProductController from './controllers/ProductController'
import uploadConfig from './config/uploadConfig'
import multer from 'multer'

const upload = multer(uploadConfig)

const routes = Router()

routes.get('/', ProductController.getAll)
routes.post(
  '/register',

  upload.single('image'),
  ProductController.ProductRegister
)
routes.put('/update/:id', ProductController.Update)
routes.delete('/delete/:id', ProductController.deleteOne)

export default routes
