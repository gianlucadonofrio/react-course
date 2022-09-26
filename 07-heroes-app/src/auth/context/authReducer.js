import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case types.LOGOUT:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
