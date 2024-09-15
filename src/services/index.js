/**
 * Import and export apis from ./apis
 * Import it in component as API.Login()
 */
import AuthApi from '@/services/apis/auth';

export const API = {
  ...AuthApi
};
