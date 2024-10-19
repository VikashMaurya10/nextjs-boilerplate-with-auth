// import font
import Wrapper from '@/lib/Wrapper';
import { geistMono, geistSans } from './fonts';

// import styles
import '@/styles/index.css';

// Other imports

// Export metadata template for the app
export const metadata = {
  title: {
    template: '%s | Acme',
    default: 'Acme' // default title for each page
  },
  description: 'Next js bolierplate with Auth v5'
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-geistMono bg-neutral-400 text-black antialiased`}
      >
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
