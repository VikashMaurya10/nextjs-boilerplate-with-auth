import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z
    .string({
      required_error: 'Email must be required.'
    })
    .min(5, {
      message: 'Email must be required.'
    })
    .email('This is not a valid email.')
    .max(255, {
      message: 'Email must have max 255 characters'
    }),
  password: z
    .string({
      required_error: 'Password must be required.'
    })
    .min(8, {
      message: 'Password must be at least 8 characters.'
    })
});
