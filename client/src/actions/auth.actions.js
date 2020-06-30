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

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

//LOGIN
export const loginUser = (userData) => (dispatch) => {
  // console.log(userData);
  axios
    .post('/api/v1/users/login', userData)
    .then((res) => {
      // console.log(res.data);
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decode = jwt_decode(token);
      // console.log('token--', token);
      // console.log('decode--', decode);
      dispatch({
        type: AUTH_ACTION.SET_CURRENT_USER,
        userData: res.data.user,
        jwt_decode: decode,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR_ACTION.GET_ERRORS,
        ErrPayload: err.response.data,
      });
    });
};
