'use client';

import { Button } from '@/components';
import { useLocalStorage } from '@/hooks';

const Index = () => {
  //-------------- State & Variables --------------//
  const { value, setValue } = useLocalStorage();

  //-------------- useEffect Methods --------------//

  //-------------- Other Methods --------------//
  // If (isLoading) {
  //   Return <Loading />;
  // }

  return (
    <>
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <Button
        onClick={() => {
          setValue((prev)=>{
            return { ...prev, name: 'vikash Maurya' };
          });
        }}
      >
        setValue
      </Button>
    </>
  );
};

export default Index;
