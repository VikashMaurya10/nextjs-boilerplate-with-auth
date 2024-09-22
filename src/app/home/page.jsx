/**
 * Home page for application
 * Route name "/"
 */
import { auth } from '@/config';
import { HomePage } from '@/page';
import { delay } from '@/services/core';

/**
 * Metadata details
 */
export const metadata = {
  title: 'Home',
  description: 'Home page'
};

const Page = async () => {
  const session = await auth();

  await delay(2000);

  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <HomePage />
    </>
  );
};

export default Page;
