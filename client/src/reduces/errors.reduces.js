import { ERROR_ACTION } from '../actions/types.action';

const initialState = {
  authenticated: false,
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR_ACTION.GET_ERRORS:
      return action.ErrPayload;
    default:
      return state;
  }
};
