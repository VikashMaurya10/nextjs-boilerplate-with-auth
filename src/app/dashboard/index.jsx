'use client';

import { Button } from '@/components';
import { useLocalStorage } from '@/hooks';
import { signOut } from 'next-auth/react';
import Loading from './loading';

const Index = () => {
  //-------------- State & Variables --------------//
  const { value, setValue, isLoading } = useLocalStorage();

  //-------------- useEffect Methods --------------//

  //-------------- Other Methods --------------//
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Button
        className="mt-5"
        onClick={() => {
          signOut();
        }}
      >
        Signout
      </Button>
    </>
  );
};

export default Index;
