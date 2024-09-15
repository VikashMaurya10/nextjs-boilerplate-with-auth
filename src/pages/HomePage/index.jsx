'use client';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Index = () => {
  return (
    <div>
      <Button
        onClick={() => {
          toast.warning('Event has been created.');
        }}
      >
        Get a Toast
      </Button>
    </div>
  );
};

export default Index;
