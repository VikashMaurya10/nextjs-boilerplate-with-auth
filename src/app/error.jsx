'use client';

import { Button } from '@/components';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex h-[80vh] items-center justify-center">
      <div className="p-4">
        <h2 className="text-xl">Something went wrong!</h2>
        <Button className="mx-auto mt-4 block" onClick={() => reset()}>
          Try again
        </Button>
      </div>
    </section>
  );
}
