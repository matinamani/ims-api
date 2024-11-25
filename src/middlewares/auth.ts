import { Request, Response, NextFunction } from 'express'
import { RolesType } from '../modules/users/user.schema'
import { verifyToken } from '../utils/jwt'

export const authorize =
  (requiredRole: RolesType) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Unauthorized user action' })
        return
      }
      const token = authHeader.split(' ')[1]
      const payload = verifyToken(token)

      if (payload.role !== requiredRole) {
        res.status(401).json({ message: 'Unauthorized user action' })
        return
      }
      req.user = payload
      next()
    } catch (error) {
      res.status(401).json({
        message: 'Unauthorized user action or expired access token',
        error,
      })

      return
    }
  }
