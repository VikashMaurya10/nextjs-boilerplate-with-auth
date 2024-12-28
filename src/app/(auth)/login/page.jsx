/**
 * Login Page for application
 * Route name "/login"
 */

import { LoginForm } from './LoginForm';

/**
 * Metadata details
 */
export const metadata = {
  title: 'Login',
  description: 'Login page for Auth'
};

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;
