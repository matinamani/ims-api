import { Router } from 'express'
import { getUsers, login, signup } from './user.controller'
import { validate } from '../../middlewares/validation'
import { CreateUserSchema, LoginUserSchema } from './user.schema'
import { authorize } from '../../middlewares/auth'

const router = Router()

router.get('/', authorize('ADMIN'), getUsers)
router.post('/signup', validate(CreateUserSchema), signup)
router.post('/login', validate(LoginUserSchema), login)

export default router
