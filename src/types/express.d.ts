import { JWTPayloadType } from '../utils/jwt'

declare global {
  namespace Express {
    interface Request {
      user?: JWTPayloadType
    }
  }
}
