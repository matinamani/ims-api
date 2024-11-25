import prisma from '@db'
import { CreateUserDTO } from './user.schema'

export const createUser = async (data: CreateUserDTO) =>
  await prisma.user.create({ data })

export const authenticateUser = async (credentials: {
  username: string
  password: string
}) => await prisma.user.findFirst({ where: credentials })

export const getAllUsers = async () =>
  await prisma.user.findMany({
    select: { id: true, email: true, username: true, phone: true, role: true },
  })
