'use client';

/**
 * This is a wrapper element on the root component.
 * It handles all additional work and states needed before initializing root component.
 */
import { Footer, Header, Toaster } from '@/components';
import { ToastConfig } from '@/config';
import { LocalStorageProvider } from '@/hooks';

const Wrapper = ({ children }) => {
  //-------------- State & Variables --------------//

  //-------------- Use Effects --------------//

  //-------------- Other Methods --------------//

  return (
    <LocalStorageProvider>
      <Header />
      <main className="min-h-[80vh]">{children}</main>
      <Footer />
      <Toaster {...ToastConfig} />
    </LocalStorageProvider>
  );
};

export default Wrapper;
