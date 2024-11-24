/**
 * Home page for application
 * Route name "/"
 */
import { ImageComponent } from '@/components';
import { auth, signOut } from '@/config';
import { HomePage } from '@/page';

/**
 * Metadata details
 */
export const metadata = {
  title: 'Home',
  description: 'Home page'
};

const Page = async () => {
  const session = await auth();

  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>

      <div className="grid grid-cols-3 sm:mt-4">
        <ImageComponent
          src="https://images.unsplash.com/photo-1621961458348-f013d219b50c"
          height={400}
          width={500}
        />
        <ImageComponent
          src="https://images.unsplash.com/photo-1621961458348-f013d219b50c"
          height={400}
          width={500}
        />
        <ImageComponent
          src="https://images.unsplash.com/photo-1621961458348-f013d219b50c"
          height={400}
          width={500}
        />
      </div>
      <HomePage />
    </>
  );
};

export default Page;
