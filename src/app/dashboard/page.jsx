/**
 * Dashboard for application
 * Route name "/dashboard"
 */
import { auth, delay } from '@/lib';

import Index from '.';

/**
 * Metadata details
 */
export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard description',
};

const DashboardPage = async () => {
  const session = await auth();

  /**
   * Fake api call
   */
  await delay(3000);

  return (
    <div>
      <code>{JSON.stringify(session, null, 2)}</code>
      <Index />
    </div>
  );
};

export default DashboardPage;
