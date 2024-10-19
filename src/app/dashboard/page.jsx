/**
 * Dashboard for application
 * Route name "/dashboard"
 */

import { DashboardHomePage } from '@/page';

/**
 * Metadata details
 */
export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard description'
};

const page = async () => {
  return (
    <>
      <DashboardHomePage />
    </>
  );
};

export default page;
