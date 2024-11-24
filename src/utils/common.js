import { toast } from "sonner";

/**
 * Handles the API response
 * @param {promise} api_call
 * @param {string|boolean} toast_success
 * @param {string|boolean} toast_loading de
 * @returns response data or null and show error / success alerts.
 */
export const responseHandler = async (api_call, toast_success, toast_loading = 'Loading...') => {
  let response = null;
  // If loading and success message is provided then show promise toast message.
  const toastId = toast;
  if (toast_loading) toast.loading(toast_loading, { id: toastId });

  try {
    response = await api_call;
    if (!response?.result) {
      response.toastId = toastId;
      toast.error(response?.message, { id: toastId });
    } else {
      if (toast_success) toast  .success(toast_success, { id: toastId });
    }
  } catch (e) {
    response = e;
  }

  // Handle success / error response
  if (response.status == 200) return response;
  else if (response?.status == 400)
    toast.error('Error 400 : ' + response?.message, { id: toastId });
  else if (response?.status == 401)
    toast.error(
      `Unauthorized 401 : ${response?.message ? response?.message : 'Action is not permitted.'}`,
      { id: toastId }
    );
  else if (response?.status == 403)
    toast.error('Unauthorized 403 : Action forbidden.', { id: toastId });
  else if (response?.status === 500)
    toast.error('Error 500 : ' + response?.message, { id: toastId });
  else toast.error('Error : Something went wrong. Please contact admin.', { id: toastId });
  return null;
};

/**
 * Genearte random string along with current length
 * @param {Number} length
 * @returns {string}
 */
export const generateString = (length) => {
  var uniStr = '';
  const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let i = 0;
  while (i <= length) {
    let num = Math.floor(Math.random() * 62);
    uniStr += str.slice(num - 1, num);
    i++;
  }
  return uniStr;
};
