import { SIGN_IN, LOG_OUT } from '../actions/constantsActions';

const initialState = {
  isAutheticated: false,
  token: null,
};

export const authetication = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      localStorage.setItem('isAutheticated', !action.payload.isAutheticated);
      return {
        isAutheticated: !action.payload.isAutheticated,
        token: 'its a token: wer4t5er45tw4e5rv151rev5wrv5erv15',
      };
    }
    case LOG_OUT: {
      localStorage.removeItem('isAutheticated');
      return initialState;
    }
    default:
      return state;
  }
};
