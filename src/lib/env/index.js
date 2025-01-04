import { z } from 'zod';

// Schema for environments variables
const envSchema = z.object({
  API_URL: z.string().url(),

  AUTH_SECRET: z.string().min(1),
  NEXTAUTH_URL: z.string().url(),

  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_ENCRYPTION_KEY: z.string().min(1)
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

// Perform zod validation
const envValidationResult = envSchema.safeParse(process.env);
export const env = envValidationResult.data;

export const validateEnv = () => {
  if (envValidationResult.error) {
    const errorMessages = EnvErrorMessages(envValidationResult.error.errors);
    throw `\n ${bold}${red}✗${reset} Error in loading environment variables:\n${errorMessages.join('\n')}\n\n Please update the environment variables and relaunch the application.`;
  }

  console.info(` ${bold}${green}✓${reset} Environment variables loaded successfully`);
};
