// import font
import { APP_NAME, auth } from '@/config';
import { geistMono, geistSans } from '@/fonts';
import Wrapper from '@/lib/wrapper';
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
        className={`${geistSans.variable} ${geistMono.variable} font-geistMono mx-auto max-w-screen-2xl bg-neutral-400 text-black antialiased`}
      >
        <SessionProvider session={session}>
          <Wrapper>{children}</Wrapper>
        </SessionProvider>
      </body>
    </html>
  );
}
