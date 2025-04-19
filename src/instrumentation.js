import { validateClientEnv } from './lib/env/client-env';
import { validateServerEnv } from './lib/env/server-env';

// Register and validate environment variables at startup
export const register = async () => {
  validateClientEnv();
  validateServerEnv();
};
