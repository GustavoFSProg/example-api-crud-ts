import Router from 'express'
import UserController from '../controllers/UserController'

const UserRoutes = Router()

UserRoutes.get('/getUser', UserController.getAll)
UserRoutes.post('/userRegister', UserController.UserRegsiter)

export default UserRoutes
