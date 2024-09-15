/**
 * Code API configuration
 */

/**
 * Creates a promise that rejects after a specified timeout
 * @param {number} ms - Timeout in milliseconds
 * @returns {Promise} - A promise that rejects after the specified timeout
 */
export const timeout = (ms) => {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(`Request timed out after ${ms} ms`)), ms);
  });
};

/**
 * Fetches data from an API endpoint with a timeout and dynamic authorization token
 * @param {string} endpoint - The API endpoint to fetch from
 * @param {Object} options - Fetch options
 * @param {string} [options.method='GET'] - HTTP method
 * @param {Object} [options.headers={}] - Request headers
 * @param {any} [options.body=null] - Request body
 * @param {string} [options.cache='default'] - Cache mode
 * @param {Object} [options.next={}] - Next.js specific options
 * @param {number} [options.timeoutMs=5000] - Timeout in milliseconds
 * @returns {Promise<any>} - Parsed JSON response
 */
export async function fetchAPI(endpoint, options = {}) {
  const {
    method = 'GET',
    headers = {},
    body = null,
    cache = 'default',
    next = {},
    timeoutMs = 5000
  } = options;

  const baseUrl = process.env.API_URL;
  const url = `${baseUrl}${endpoint}`;

  // Construct headers with optional Authorization token
  const fetchHeaders = {
    'Content-Type': 'application/json',
    ...headers
  };

  if (headers.token) {
    fetchHeaders.Authorization = `Bearer ${headers.token}`;
  }

  try {
    const response = await Promise.race([
      fetch(url, {
        method,
        headers: fetchHeaders,
        body: body ? JSON.stringify(body) : null,
        cache,
        next
      }),
      timeout(timeoutMs)
    ]);

    let data = {};
    data.status = response.status;
    data.message = 'Here Response message...';
    data.data = await response.json();
    return data;
  } catch (error) {
    if (error.message.includes('timed out')) {
      console.error(`Request to ${url} timed out after ${timeoutMs} ms`);
    }
    throw error;
  }
}
