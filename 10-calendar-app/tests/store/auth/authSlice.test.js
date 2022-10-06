import {
  authSlice,
  onLogin,
  onLogout,
} from '../../../src/store/auth/authSlice';
import { authenticatedState, initialState } from '../../fixtures/authStates';
import { testUserCredentials } from '../../fixtures/testUser';

describe('Pruebas en el authSlice', () => {
  test('debe de regresar el estado inicial', () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test('debe de realizar un login', () => {
    const state = authSlice.reducer(initialState, onLogin(testUserCredentials));
    expect(state).toEqual({
      status: 'authenticated',
      user: testUserCredentials,
      errorMessage: undefined,
    });
  });
  test('debe de realizar un logout', () => {
    const state = authSlice.reducer(authenticatedState, onLogout());
    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: undefined,
    });
  });
  test('debe de realizar un logout con credenciales', () => {
    const errorMessage = 'Error al autenticar';
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: errorMessage,
    });
  });

  test('debe de limpiar el mensaje de error', () => {
    const errorMessage = 'Error al autenticar';
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    const state2 = authSlice.reducer(
      state,
      authSlice.actions.clearErrorMessage()
    );
    expect(state2.errorMessage).toBeUndefined();
  });

  test('debe de realizar el checking', () => {
    const state = authSlice.reducer(authenticatedState, onLogout());
    const state2 = authSlice.reducer(state, authSlice.actions.onChecking());
    expect(state2).toEqual(initialState);
  });
});
