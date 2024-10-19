/**
 * Server actions for user Auth
 */
'use server';

import { USERS } from '@/assets/data';
import { signIn } from '@/config';
import { delay } from '@/services/core';

/**
 * Login user by credentials
 * @param {*} values
 * @returns
 */

export const LoginUser = async (values) => {
  /**
   * Implement here own logic for user login.
   * i.e fetch user by email form api or database.
   */
  const user = USERS?.find(
    (user) =>
      user.email?.toLowerCase() === values?.email?.toLowerCase() &&
      user.password === values.password
  );

  /**
   * Just see loading state remove in production
   */
  await delay(1000);

  let res = {
    status: 200,
    result: true
  };

  if (!user) {
    res.message = 'Invalid email or password from server side';
    res.result = false;
  } else {
    res.user = user;
  }

  return res;
};

export const handleCredentialLogin = async (values) => {
  try {
    await signIn('credentials', { redirect: false, ...values });
    return { status: 200, result: true };
  } catch (error) {
    // catch error message with throw form auth.js file
    const err = {
      status: 200,
      result: false,
      message: error.cause
    };
    return err;
  }
};
