/**
 * This is the Home page.
 */
'use client';

import { ImageComponent } from '@/components';
import { useErrorLog } from '@/hooks';

export const HomePage = () => {
  //-------------- State & Variables --------------//
  const handleError = useErrorLog('pages/HomePage');

  //-------------- Use Effects --------------//

  //-------------- Other Methods --------------//

  return (
    <>
      <section>
        Home page
        <ImageComponent width={400} height={400} src="https://images.unsplash.com/photo-1621961458348-f013d219b50c" />
      </section>
    </>
  );
};
