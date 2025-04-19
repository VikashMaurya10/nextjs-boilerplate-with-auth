/**
 * Login Page for application
 * Route name "/login"
 */

import { LoginForm } from './login-form';
import { ImageComponent } from '@/components';
import { GalleryVerticalEnd } from '@/assets';
import { APP_NAME } from '@/config';

/**
 * Metadata details
 */
export const metadata = {
  title: 'Login',
  description: 'Login page for Auth'
};

const LoginPage = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            {APP_NAME}
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <ImageComponent
          src={null}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-40 dark:grayscale-50"
        />
      </div>
    </div>
  );
};

export default LoginPage;
