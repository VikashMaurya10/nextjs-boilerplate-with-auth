/**
 * Not Found page
 * IF any route not exist then this page will be shown
 */
import { NotFoundPage } from '@/page';

/**
 * Metadata details
 */
export const metadata = {
  title: '404',
  description: 'Not found page description'
};

const PageNotFound = () => {
  return <NotFoundPage />;
};

export default PageNotFound;
