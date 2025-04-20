/**
 * This is a wrapper element on the root component.
 */
import { APP_NAME } from '@/config';
import { geistMono, geistSans } from '@/fonts';
import { Providers } from '@/lib';
// Import styles
import '@/styles/tailwind.css';

// Export metadata template for the app
export const metadata = {
  title: {
    template: '%s | ' + APP_NAME,
    default: APP_NAME, // Default title for each page
  },
  description: 'Next js bolierplate with Auth v5',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
