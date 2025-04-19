import NextAuth from 'next-auth';

import { authConfig } from './auth-options';

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
