import { Request, Response } from 'express'
import { CreateUserDTO, LoginUserDTO } from './user.schema'
import { authenticateUser, createUser, getAllUsers } from './user.service'

export const signup = async (req: Request, res: Response) => {
  const body: CreateUserDTO = req.body
  const newUser = await createUser(body)

  res.status(201).json({ message: 'user created', newUser })
}

export const login = async (req: Request, res: Response) => {
  const credentials: LoginUserDTO = req.body
  const user = await authenticateUser(credentials)

  if (user) res.status(200).json({ message: 'login successful!', user })
  else res.status(401).json({ message: 'wrong username or password' })
}

export const getUsers = async (_: Request, res: Response) => {
  const users = await getAllUsers()
  res.status(200).json({ users })
}
