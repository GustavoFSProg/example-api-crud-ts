import Router from 'express'
import ProductController from '../controllers/ProductController'
import uploadConfig from '../config/uploadConfig'
import multer from 'multer'

const upload = multer(uploadConfig)

const ProductsRoutes = Router()

ProductsRoutes.get('/', ProductController.getAll)
ProductsRoutes.post(
  '/register',

  upload.single('image'),
  ProductController.ProductRegister
)
ProductsRoutes.put('/update/:id', ProductController.Update)
ProductsRoutes.delete('/delete/:id', ProductController.deleteOne)

export default ProductsRoutes
