import { combineReducers } from 'redux';
import { loginReducers } from './reducers';

export const allReducers = combineReducers({
  login: loginReducers,
});

