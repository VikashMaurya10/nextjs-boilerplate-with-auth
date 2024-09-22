/**
 * This is Login page
 */

'use client';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormInput,
  FormItem,
  FormMessage
} from '@/components';
import { useErrorLog } from '@/hooks';
import { handleCredentialLogin } from '@/services/apis/auth';
import { responseHandler } from '@/utils';
import { loginFormSchema } from '@/zod-schema';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

export const LoginPage = () => {
  //-------------- State & Variables --------------//
  const handleError = useErrorLog('page/Login');

  //-------------- Use Effects --------------//
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: 'vikash@gmail.com',
      password: 'vikash@1234'
    }
  });

  // -------------- Other Methods --------------//

  /**
   * On Login click
   */
  const onLogin = async (values) => {
    try {
      const res = await responseHandler(handleCredentialLogin(values), 'Login successfully.');
      /**
       * Redirect user if need.
       * ELSE reload the window for update the user details
       * THEN middleware redirect the user at requested path
       * which already appended in url by middleware
       */
      if (res?.result) {
        window.location.reload();
      }
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <>
      <section className="flex h-[80vh] items-center justify-center">
        <div className="w-full rounded-md border border-gray-400 bg-white p-5 shadow max-sm:mx-4 sm:w-[28rem]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onLogin)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FormInput label="Email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FormInput label="Password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
};
