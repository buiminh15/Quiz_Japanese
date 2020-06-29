import axios from 'axios';
import { AUTH_ACTION } from './types.action';
import jwt_decode from 'jwt-decode';

// REGISTER
export const registerUser = (userData, history) => (dispatch) => {
  console.log('AUTH_ACTION--', AUTH_ACTION);
  console.log('userData--', userData);
};
