export const loginReducers = (state = false, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return `${action.payload.email} ${action.payload.password}`;
    case 'LOG_OUT':
      return action.payload;
    default:
      return 'You have not executed any actions';
  }
};
