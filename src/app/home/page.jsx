import { Button } from '@/components';
import { requireAuth } from '@/lib';

const Home = async () => {
  const session = await requireAuth();
  return (
    <div>
      {JSON.stringify(session)}
      <Button className={'flex items-center justify-center'}>Button</Button>
    </div>
  );
};

export default Home;
