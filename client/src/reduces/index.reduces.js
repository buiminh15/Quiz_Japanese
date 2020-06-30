import { combineReducers } from 'redux';
import AuthReducer from './auth.reducer';
import errorsReducer from './errors.reduces';

export default combineReducers({
  auth: AuthReducer,
  errors: errorsReducer,
});
