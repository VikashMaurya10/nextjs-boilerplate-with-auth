'use client';

import { Button } from '@/components';
import { useLocalStorage } from '@/hooks';
import { signOut } from 'next-auth/react';
import { useTransition } from 'react';
import Loading from './loading';

const Index = () => {
  //-------------- State & Variables --------------//
  const { value, setValue, isLoading } = useLocalStorage();
  const [isPending, startTransition] = useTransition();

  //-------------- useEffect Methods --------------//

  //-------------- Other Methods --------------//
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <>
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <Button
        disabled={isPending}
        className="mt-5"
        onClick={() => {
          startTransition(() => {
            signOut();
          });
        }}
      >
        {isPending ? 'Loading...' : 'Signout'}
      </Button>
    </>
  );
};

export default Index;
