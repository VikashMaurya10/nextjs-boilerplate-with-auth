/**
 * This is Login form
 */
'use client';
import { handleCredentialLogin } from '@/actions';
import { Github } from '@/assets';
import {
  Button,
  Divider,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from '@/components';
import { useErrorLog } from '@/hooks';
import { responseHandler } from '@/lib';
import { loginFormSchema } from '@/zod-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  //-------------- State & Variables --------------//
  const router = useRouter();
  const handleError = useErrorLog('page/Login');
  const [isPending, startTransition] = useTransition();

  //-------------- Use Effects --------------//
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: 'johndue@gmail.com',
      password: 'test@1234'
    }
  });
  // -------------- Other Methods --------------//

  /**
   * On Login click
   */
  const onLogin = async (values) => {
    try {
      startTransition(async () => {
        const res = await responseHandler(
          handleCredentialLogin(values),
          'Login successfully.',
          'Logging...'
        );
        /**
         * Redirect user if need.
         * ELSE reload the window for update the user details
         * THEN middleware redirect the user at requested path
         * which already appended in url by middleware
         */
        if (res?.result) {
          router.refresh();
          location.reload();
        }
      });
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onLogin)} className="space-y-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} disabled={isPending} />
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
              <div className="flex justify-between">
                <FormLabel>Passowrd</FormLabel>
                <Link href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                  Forgot your password?
                </Link>
              </div>
              <FormControl>
                <Input type="password" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? 'Submitting...' : 'Submit'}
        </Button>

        <Divider>Or continue with</Divider>

        <Button type="button" variant="outline" className="w-full">
          <Github />
          Login with GitHub
        </Button>

        <div className="text-center text-sm">
          Don&apos;t have an account?{' '}
          <a href="#" className="underline underline-offset-4">
            Sign up
          </a>
        </div>
      </form>
    </Form>
  );
};
