/**
 * This is a wrapper element on the root component.
 */
import { SessionProvider } from 'next-auth/react';

import { TailwindIndicator, ThemeProvider, Toaster } from '@/components';
import { APP_NAME, ToastConfig } from '@/config';
import { geistMono, geistSans } from '@/fonts';
import { LocalStorageProvider } from '@/hooks';
import { auth } from '@/lib';
// Import styles
import '@/styles/index.css';

// Export metadata template for the app
export const metadata = {
  title: {
    template: '%s | ' + APP_NAME,
    default: APP_NAME, // Default title for each page
  },
  description: 'Next js bolierplate with Auth v5',
};

const RootLayout = async ({ children }) => {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider session={session}>
            <LocalStorageProvider>{children}</LocalStorageProvider>
            <Toaster {...ToastConfig} />
            <TailwindIndicator />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
