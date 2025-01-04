/**
 * Dashboard for application
 * Route name "/dashboard"
 */

import { auth } from '@/config';
import Index from '.';

/**
 * Metadata details
 */
export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard description'
};

const DashboardPage = async () => {
  const session = await auth();

  return (
    <>
      {session.user.access_token}
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Index />
    </>
  );
};

export default DashboardPage;
