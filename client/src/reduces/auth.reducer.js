// import { LoginUser } from '../actions/login.actions';

import { AUTH_ACTION } from '../actions/types.action';
import isEmpty from '../validations/isEmpty';

const initialState = {
  authenticated: false,
  user: {},
  decode: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.jwt_decode),
        user: action.userData,
        decode: action.jwt_decode,
      };
    default:
      return state;
  }
};
