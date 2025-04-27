/**
 * This is a wrapper element for all Providers.
 */
import { SessionProvider } from 'next-auth/react';

import { TailwindIndicator, ThemeProvider, Toaster } from '@/components';
import { ToastConfig } from '@/config';
import { LocalStorageProvider } from '@/hooks';

import { auth } from './auth';

export const Providers = async ({ children }) => {
  const session = await auth();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SessionProvider session={session}>
        <LocalStorageProvider>{children}</LocalStorageProvider>
        <Toaster {...ToastConfig} />
        <TailwindIndicator />
      </SessionProvider>
    </ThemeProvider>
  );
};
