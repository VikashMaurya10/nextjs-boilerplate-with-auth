'use client';

/**
 * This is a wrapper element on the root component.
 * It handles all additional work and states needed before initializing root component.
 */
import { Toaster } from '@/components/ui/sonner';
import { ToastConfig } from '@/config';

const Wrapper = ({ children }) => {
  //-------------- State & Variables --------------//
  // const handleError = useErrorLog('lib/Wrapper');

  //-------------- Use Effects --------------//

  //-------------- Other Methods --------------//

  return (
    <div>
      {children}
      <Toaster {...ToastConfig} />
    </div>
  );
};

export default Wrapper;
