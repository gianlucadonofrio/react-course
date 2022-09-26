import { authReducer, types } from '../../../src/auth';

describe('Pruebas en el authReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });
  test('debe de (login) llamar el login autenticar y establecer el user', () => {
    const action = {
      type: types.LOGIN,
      payload: {
        name: 'Gianluca',
        id: '123',
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });
  test('debe de(logout) borrar el name del usuario y lloged en false', () => {
    const state = {
      logged: true,
      user: {
        id: '123',
        name: 'Gianluca',
      },
    };

    const action = {
      type: types.LOGOUT,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({ logged: false });
  });
});
