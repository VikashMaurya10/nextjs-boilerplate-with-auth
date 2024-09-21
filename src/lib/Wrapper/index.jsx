'use client';

/**
 * This is a wrapper element on the root component.
 * It handles all additional work and states needed before initializing root component.
 */
import { Footer, Header, Toaster } from '@/components';
import { ToastConfig } from '@/config';

const Wrapper = ({ children }) => {
  //-------------- State & Variables --------------//

  //-------------- Use Effects --------------//

  //-------------- Other Methods --------------//

  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
        {children}
        <Toaster {...ToastConfig} />
      </main>
      <Footer />
    </>
  );
};

export default Wrapper;
