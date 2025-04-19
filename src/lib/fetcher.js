/**
 * Code API configuration
 */
'use server';

import { REVALIDATE_TIME } from '@/config';

import { auth } from './auth';
import { env } from './env';

export const delay = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Creates a promise that rejects after a specified timeout
 * @param {number} ms - Timeout in milliseconds
 * @returns {Promise} - A promise that rejects after the specified timeout
 */
export const timeout = async (ms) => {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(`Request timed out after ${ms} ms`)), ms);
  });
};

/**
 * Fetches data from an API endpoint with dynamic authorization token
 * @param {string} endpoint - The API endpoint to fetch from
 * @param {Object} options - Fetch options
 * @param {string} [options.method='GET'] - HTTP method
 * @param {Object} [options.headers={}] - Request headers
 * @param {any} [options.body=undefined] - Request body
 * @param {Object} [options.next={}] - Next.js specific options
 * @returns {Promise<any>} - Parsed JSON response
 */
export const fetchAPI = async (endpoint, options = {}) => {
  const session = await auth();

  const { method = 'GET', headers = null, body, fromData = undefined, next } = options;

  const url = `${env.API_URL}/api${endpoint}`;

  try {
    const res = await fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        ...(session?.user && { Authorization: `Bearer ${session?.user?.access_token}` }),
        ...(headers ? headers : { 'Content-Type': 'application/json' }),
      },
      body: body ? JSON.stringify(body) : fromData,
      next: {
        revalidate: REVALIDATE_TIME,
        ...next,
      },
    });

    var response = {};
    response.status_code = res.status;
    response.data = await res.json();
    return data;
  } catch (error) {
    console.log('fetchAPI', error);
    throw new Error(`API error: url- ${url}\n ${error.message}\n`, error);
  }
};
