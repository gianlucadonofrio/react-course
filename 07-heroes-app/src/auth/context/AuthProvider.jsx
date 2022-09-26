import { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

const initialState = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, initialState);

  const onLogin = (name = '') => {
    const user = { id: 1, name };
    const action = {
      type: types.LOGIN,
      payload: user,
    };
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        onLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
