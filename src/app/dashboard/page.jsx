/**
 * Dashboard for application
 * Route name "/dashboard"
 */

import { PageLayout } from '@/components';
import { auth } from '@/config';
import Index from '.';
import { delay } from '@/lib';

/**
 * Metadata details
 */
export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard description'
};

const DashboardPage = async () => {
  const session = await auth();

  await delay(3000);

  return (
    <PageLayout>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Index />
    </PageLayout>
  );
};

export default DashboardPage;
