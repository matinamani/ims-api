import { z } from 'zod'

export const CreateUserSchema = z
  .object({
    username: z.string().min(4, 'Username must be at least 4 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    phone: z
      .string()
      .startsWith('09', 'Enter a valid phone number(09123456789)')
      .length(11, 'Enter a valid phone number(09123456789)')
      .optional(),
    role: z.enum(['ADMIN', 'SELLER', 'CUSTOMER']).default('CUSTOMER'),
  })
  .strict()

export const LoginUserSchema = CreateUserSchema.pick({
  username: true,
  password: true,
})

export type CreateUserDTO = z.infer<typeof CreateUserSchema>
export type LoginUserDTO = z.infer<typeof LoginUserSchema>
