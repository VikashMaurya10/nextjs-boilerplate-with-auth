/**
 * Home page for application
 * Route name "/login"
 */
import { HomePage } from '@/page';
import { delay } from '@/services/core';

/**
 * Metadata details for this page
 */
export const metadata = {
  title: 'Home',
  description: 'Home page'
};

const Page = async () => {
  await delay(2000);
  return <HomePage />;
};

export default Page;
