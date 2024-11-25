import jwt from 'jsonwebtoken'
import { env } from '@config'
import { RolesType } from '../modules/users/user.schema'

export type JWTPayloadType = {
  id: string
  username: string
  iat: number
  role: RolesType
}

export const generateToken = (payload: JWTPayloadType) =>
  jwt.sign(payload, env.JWT_SECRET)

export const verifyToken = (token: string) =>
  jwt.verify(token, env.JWT_SECRET) as JWTPayloadType
