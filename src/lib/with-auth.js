import { redirect } from 'next/navigation';

import { auth } from './auth';

/**
 * Require authentication for a page or API route.
 * If the user is not authenticated, redirect them to the login page.
 */
export const requireAuth = async () => {
  const session = await auth();
  if (!session?.user) redirect('/login');
  return session;
};
