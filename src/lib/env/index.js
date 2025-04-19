import { clientEnv } from './client-env';
import { serverEnv } from './server-env';

export const env = { ...serverEnv, ...clientEnv };
