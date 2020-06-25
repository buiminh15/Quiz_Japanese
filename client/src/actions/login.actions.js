import axios from 'axios';

export const LoginActionsType = {
  LOGIN: 'LOGIN',
};

export const LoginActions = (state) => ({
  user: state.user,
});

export const LoginDispatch = (dispatch) => ({
  login: (email, password) => {
    const loginPromise = axios
      .post('/api/v1/users/login', {
        email: email,
        password: password,
      })
      .then((res) => {
        dispatch({
          type: LoginActionsType.LOGIN,
          payload: res,
        });
        return Promise.resolve(res);
      });

    return loginPromise;
  },
});
