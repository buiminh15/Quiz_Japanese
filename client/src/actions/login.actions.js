import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types.action';

export const LoginUser = (userData) => (dispatch) => {
  axios
    .post('/api/v1/users/login', userData)
    .then((res) => {
      console.log('LoginUser res--', res);
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
