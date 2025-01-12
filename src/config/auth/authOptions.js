/**
 * Auth option for User authentication
 */

import { LoginUser } from '@/actions';
import { CredentialsSignin } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig = {
  trustHost: true,
  // trustHostedDomain: true,
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        /**
         * Get user details as per credentials
         */
        const res = await LoginUser(credentials);

        if (!res?.result) {
          throw new CredentialsSignin({
            cause: res.message
          });
        }

        if (!('user' in res)) {
          throw new CredentialsSignin({
            cause: res.message
          });
        }

        const user = {
          access_token: 'secured authrization token', // Get token form api res
          ...res.user
        };

        return user;
      }
    })
  ],
  callbacks: {
    jwt({ token, user, trigger, session }) {
      if (user) {
        token.first_name = user.first_name;
        token.last_name = user.last_name;
        token.username = user.username;
        token.email = user.email;
        token.phone_number = user.phone_number;
        token.image = user.image;
        token.role = user.role || 'user';
        token.access_token = user.access_token;
      }

      // Update session
      if (trigger === 'update' && session) {
        token = { ...token, ...session };
      }

      return token;
    },
    session({ session, token }) {
      session.user.first_name = token.first_name;
      session.user.last_name = token.last_name;
      session.user.username = token.username;
      session.user.email = token.email;
      session.user.phone_number = token.phone_number;
      session.user.image = token.image;
      session.user.role = token.role;
      session.user.access_token = token.access_token;

      return session;
    }
  }
};
