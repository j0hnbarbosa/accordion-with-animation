import { SIGN_IN, LOG_OUT } from './constantsActions';

export const loginAction = (params = null) => ({
  type: SIGN_IN,
  payload: params,
});

export const logoutAction = () => ({
  type: LOG_OUT,
});
