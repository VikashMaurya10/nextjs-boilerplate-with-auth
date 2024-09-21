'use server';

import { delay, fetchAPI } from '@/services/core';

export const LoginUser = async () => {
  const res = await fetchAPI('/posts');
  await delay(3000);
  return res;
};
