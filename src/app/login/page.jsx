import { LoginPage } from '@/page';

/**
 * Metadata details for this page
 */
export const metadata = {
  title: 'Login',
  description: 'Login page for Auth'
};

/**
 * Login Page for application
 * Route name "/login"
 */
const Page = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Page;
