import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }).trim(),
    email: z
      .string({ required_error: 'Email is required' })
      .email('Invalid email address')
      .trim(),
    password: z.string({ required_error: 'Password is required' }),
    phone: z.string({ required_error: 'Phone is required' }).trim(),
    address: z.string({ required_error: 'Address is required' }),
    role: z.enum(['admin', 'user']),
  }),
});

export const UserValidation = {
  userValidationSchema,
};
