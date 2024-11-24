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
      </section>
    </>
  );
};
