import { z } from 'zod';

// Schema for environments variables
const envSchema = z.object({
  API_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'production']),

  AUTH_SECRET: z.string().min(1),
  NEXTAUTH_URL: z.string().url(),
});

const bold = '\x1b[1m';
const red = '\x1b[31m';
const green = '\x1b[32m';
const reset = '\x1b[0m';

const EnvErrorMessages = (errors) => {
  return errors.map((error, idx) => {
    return `   ${idx + 1}) ${error.path.join('.')} : ${error.message}`;
  });
};

const rowEnv = {
  API_URL: process.env.API_URL,
  NODE_ENV: process.env.NODE_ENV,
  AUTH_SECRET: process.env.AUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
};

// Perform zod validation
const envValidationResult = envSchema.safeParse(rowEnv);
export const serverEnv = envValidationResult.data;

export const validateServerEnv = () => {
  if (envValidationResult.error) {
    const errorMessages = EnvErrorMessages(envValidationResult.error.errors);
    throw `\n ${bold}${red}✗${reset} Error in loading server environment variables:\n${errorMessages.join('\n')}\n\n Please update the environment variables and relaunch the application.`;
  }

  console.info(` ${bold}${green}✓${reset} Server Environment variables loaded successfully`);
};