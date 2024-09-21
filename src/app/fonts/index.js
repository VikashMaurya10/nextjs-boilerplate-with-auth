import localFont from 'next/font/local';

export const geistSans = localFont({
  src: './static/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});

export const geistMono = localFont({
  src: './static/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});
