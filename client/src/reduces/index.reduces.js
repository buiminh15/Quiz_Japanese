import { combineReducers } from 'redux';
// import { LoginReducer } from './login.reducer';
import errorsReducer from './errors.reduces';

export default combineReducers({
  //   user: LoginReducer,
  errors: errorsReducer,
});
