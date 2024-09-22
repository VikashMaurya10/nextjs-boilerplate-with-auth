/**
 * Dashboard for application
 * Route name "/dashboard"
 */

import { DashboardHomePage } from '@/page';
import { delay } from '@/services/core';

/**
 * Metadata details
 */
export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard description'
};

const page = async () => {
  await delay(1000);
  return (
    <>
      <DashboardHomePage />
    </>
  );
};

export default page;
