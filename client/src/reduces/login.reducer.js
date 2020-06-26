import { LoginUser } from '../actions/login.actions';

const initState = {};

// export const LoginReducer = (state = initState, action) => {
//   switch (action.type) {
//     case LoginActionsType.LOGIN:
//       var data = action.payload.data;
//       localStorage.setItem('token', data.token);
//       return {
//         ...state,
//         ...data.user,
//       };
//     default:
//       return state;
//   }
// };
