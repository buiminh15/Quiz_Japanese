import axios from 'axios';
import { AUTH_ACTION, ERROR_ACTION } from './types.action';
import jwt_decode from 'jwt-decode';

// REGISTER
export const registerUser = (userData, history) => (dispatch) => {
  // console.log('history--', history);
  // console.log('AUTH_ACTION--', AUTH_ACTION);
  // console.log('userData--', userData);
  axios
    .post('/api/v1/users/register', userData)
    .then((res) => history.push('/'))
    .catch((err) => {
      // console.log('err--', err.response);
      dispatch({
        type: ERROR_ACTION.GET_ERRORS,
        ErrPayload: err.response.data,
      });
    });
};
