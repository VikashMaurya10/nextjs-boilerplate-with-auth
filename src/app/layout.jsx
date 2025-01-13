/**
 * This is a wrapper element on the root component.
 * It handles all additional work and states needed before initializing root component.
 */

import { Toaster } from '@/components';
import { APP_NAME, auth, ToastConfig } from '@/config';
import { geistMono, geistSans } from '@/fonts';
import { LocalStorageProvider } from '@/hooks';
import { SessionProvider } from 'next-auth/react';

// import styles
import '@/styles/index.css';

// Export metadata template for the app
export const metadata = {
  title: {
    template: '%s | ' + APP_NAME,
    default: APP_NAME // default title for each page
  },
  description: 'Next js bolierplate with Auth v5'
};

export default async function RootLayout({ children }) {
  const session = await auth();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark mx-auto max-w-screen-2xl bg-black font-geistMono text-white antialiased`}
      >
        <SessionProvider session={session}>
          <LocalStorageProvider>{children}</LocalStorageProvider>
          <Toaster {...ToastConfig} />
        </SessionProvider>
      </body>
    </html>
  );
}
