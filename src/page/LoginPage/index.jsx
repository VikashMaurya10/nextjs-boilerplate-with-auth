/**
 * This is Login page
 */

'use client';

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from '@/components';
import { LoginUser } from '@/services/apis/auth';
import { loginFormSchema } from '@/zod-schema';
import { responseHandler } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useErrorLog } from '@/hooks';

export const LoginPage = () => {
  //-------------- State & Variables --------------//
  const handleError = useErrorLog('page/Login');

  //-------------- Use Effects --------------//
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: ''
    }
  });

  // -------------- Other Methods --------------//

  /**
   * On Login click
   */
  const onLogin = async () => {
    try {
      const res = await responseHandler(LoginUser(), 'Login successfully.', 'Loading...');
      console.log('response api_call', res);
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <>
      <section className="setWidth">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onLogin)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </section>
    </>
  );
};
