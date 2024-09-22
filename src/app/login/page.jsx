/**
 * Login Page for application
 * Route name "/login"
 */

import { LoginPage } from '@/page';

/**
 * Metadata details
 */
export const metadata = {
  title: 'Login',
  description: 'Login page for Auth'
};

const Page = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Page;
