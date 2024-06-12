import { z } from 'zod';

// user sign up validation 
const userSignupValidationSchema = z.object({
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

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required.' }).email('Invalid email'),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'Old password is required',
    }),
    newPassword: z.string({ required_error: 'Password is required' }),
  }),
});

const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh token is required!',
    }),
  }),
});

export const AuthValidation = {
  loginValidationSchema,
  changePasswordValidationSchema,
  refreshTokenValidationSchema,
  userSignupValidationSchema,
};
