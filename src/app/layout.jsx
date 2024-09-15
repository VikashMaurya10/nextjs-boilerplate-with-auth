// import font
import { geistMono, geistSans } from '@/app/fonts/font';
import Wrapper from '@/lib/Wrapper';

// import styles
import '@/styles/globals.css';

// Other imports

// Export metadata template for the app
export const metadata = {
  title: {
    template: '%s | Acme',
    default: 'Acme' // default title for each page
  },
  description: 'Next js bolierplate with Auth v5'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-800 text-white antialiased`}
      >
        <Wrapper>
          <main>{children}</main>
        </Wrapper>
      </body>
    </html>
  );
}
