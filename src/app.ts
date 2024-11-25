import express from 'express'
import userRoutes from './modules/users/user.routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/users', userRoutes)

export default app
