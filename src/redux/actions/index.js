export const loginAction = (params = '') => ({
  type: 'SIGN_IN',
  payload: params,
});

export const logoutAction = (params = '') => ({
  type: 'LOG_OUT',
  payload: params,
});
