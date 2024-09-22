import NextAuth from 'next-auth';
import { authConfig } from './authOptions';

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
