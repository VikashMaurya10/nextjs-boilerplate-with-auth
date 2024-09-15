'use client';
import { Button } from '@/components/ui/button';
import { useErrorLog } from '@/hooks/useErrorLog';
import { responseHandler } from '@/lib/utils';
import { LoginUser } from '@/services/apis/auth';

const Login = () => {
  //-------------- State & Variables --------------//
  const handleError = useErrorLog('pages/Login');

  //-------------- Use Effects --------------//

  //-------------- Other Methods --------------//
  /**
   * On Login click
   */
  const onLogin = async () => {
    try {
      const api_call = await LoginUser
      const res = await responseHandler(api_call, 'Login successfully.', 'Loading...');
      console.log('response', res);
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <div>
      Login page
      <form action={onLogin}>
        <Button type="submit">get toast with api call</Button>
      </form>
    </div>
  );
};

export default Login;
