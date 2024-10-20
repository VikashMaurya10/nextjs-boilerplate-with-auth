'use client';

/**
 * This is a wrapper element on the root component.
 * It handles all additional work and states needed before initializing root component.
 */
import { Footer, Header, Toaster } from '@/components';
import { ToastConfig } from '@/config';
import { makeStore } from '@/redux/store';
import { useRef } from 'react';
import { Provider } from 'react-redux';

const Wrapper = ({ children }) => {
  //-------------- State & Variables --------------//
  const storeRef = useRef(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  //-------------- Use Effects --------------//

  //-------------- Other Methods --------------//

  return (
    <Provider store={storeRef.current}>
      <Header />
      <main className="min-h-[80vh] b">
        {children}
        <Toaster {...ToastConfig} />
      </main>
      <Footer />
    </Provider>
  );
};

export default Wrapper;
