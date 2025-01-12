/**
 * Home page for application
 * Route name "/"
 */
import Index from './Index';

/**
 * Metadata details
 */
export const metadata = {
  title: 'Home',
  description: 'Home page'
};

const Page = async () => {
  return (
    <>
      <Index />
    </>
  );
};

export default Page;
