import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z
    .string({
      required_error: 'Email must be required.',
    })
    .min(5, {
      message: 'Email must be required.',
    })
    .email('This is not a valid email.')
    .max(255, {
      message: 'Email must have max 255 characters',
    }),
  password: z
    .string({
      required_error: 'Password must be required.',
    })
    .min(8, {
      message: 'Password must be at least 8 characters.',
    }),
});

export const FormSchemaStep_2 = z
  .object({
    file: z
      .any()
      .refine(
        (file) => {
          if (!file) return true; // Allow no file at first
          return file.type === 'application/pdf';
        },
        { message: 'Only PDF files are allowed' }
      )
      .optional(),
    job_description: z.string().optional(),
  })
  .refine(
    (data) => {
      return data.file || data.job_description?.trim();
    },
    {
      message: 'Either a PDF file or job description is required',
      path: ['file'],
    }
  );
