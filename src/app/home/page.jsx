/**
 * Home page for application
 * Route name "/"
 */
import { PageLayout } from '@/components';
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
    <PageLayout>
      <Index />
    </PageLayout>
  );
};

export default Page;
