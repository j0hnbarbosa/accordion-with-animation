import { combineReducers } from 'redux';
import { loginReducers } from './reducers';
import { authetication } from './authetication';

export const allReducers = combineReducers({
  loginReducers,
  authetication,
});
