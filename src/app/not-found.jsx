/**
 * Not Found page
 * IF any route not exist then this page will be shown
 */

import Link from 'next/link';

/**
 * Metadata details
 */
export const metadata = {
  title: '404',
  description: 'Not found page description'
};

const PageNotFound = () => {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center">
      <h1 className="text-5xl font-bold capitalize sm:text-9xl">
        4<span className="text-purple-800">0</span>4
      </h1>
      <h2 className="mt-4 text-2xl capitalize sm:text-4xl">Oops! Page not Found</h2>
      <Link
        href={'/'}
        className="mt-5 block rounded p-2 px-4 text-sm font-semibold text-white underline underline-offset-2 transition-colors duration-300"
      >
        Go to home
      </Link>
    </section>
  );
};

export default PageNotFound;
