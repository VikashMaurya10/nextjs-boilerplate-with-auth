// import font
import { geistMono, geistSans } from './fonts';

// import styles
import '@/styles/index.css';

// Other imports
import Wrapper from '@/lib/Wrapper';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/config';

// Export metadata template for the app
export const metadata = {
  title: {
    template: '%s | Acme',
    default: 'Acme' // default title for each page
  },
  description: 'Next js bolierplate with Auth v5'
};

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-400 font-geistMono text-black antialiased`}
      >
        <SessionProvider session={session}>
          <Wrapper>{children}</Wrapper>
        </SessionProvider>
      </body>
    </html>
  );
}
