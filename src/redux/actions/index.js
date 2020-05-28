export const loginAction = (params = '') => ({
  type: 'SIGN_IN',
  payload: 'Signin with success!',
});

export const logoutAction = (params = '') => ({
  type: 'LOG_OUT',
  payload: 'Logout with success!',
});
