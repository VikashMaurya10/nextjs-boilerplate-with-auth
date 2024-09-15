'use server';

import { fetchAPI } from '../core';

/**
 * APIs related to Authentication
 */

/**
 * Login API
 * @param {object} data object data.
 * @param {string|boolean} toast_success success message if provided. Default value false.
 * @param {string|boolean} toast_loading loading message if provided. Default value false.
 * @returns {json|null} json response or null.
 */
const LoginUser = async () => {
  return await fetchAPI('/posts');
};

export { LoginUser };
