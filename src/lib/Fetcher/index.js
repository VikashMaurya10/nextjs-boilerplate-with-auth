/**
 * Code API configuration
 */
'use server';

import { auth, REVALIDATE_TIME } from '@/config';
import { env } from '../env';

export async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
export async function fetchAPI(endpoint, options = {}) {
  const session = await auth();
  const BASE_URL = env.API_URL;

  const { method = 'GET', headers = {}, body, next } = options;

  const url = `${BASE_URL}/api${endpoint}`;

  try {
    const res = await fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(session?.user && { Authorization: `Bearer ${session?.user?.access_token}` }),
        ...headers
      },
      body: body ? JSON.stringify(body) : undefined,
      next: {
        revalidate: REVALIDATE_TIME,
        ...next
      }
    });

    let data = await res.json();
    data.status_code = res.status;
    return data;
  } catch (error) {
    console.log('fetchAPI', error);
    throw new Error(`API error: url- ${url}\n ${error.message}\n`, error);
  }
}
