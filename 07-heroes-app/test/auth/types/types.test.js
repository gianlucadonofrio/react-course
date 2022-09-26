import { types } from '../../../src/auth';

describe('Pruebas en "Types.js"', () => {
  test('debe de retornar el objeto con los types', () => {
    expect(types).toEqual({
      LOGIN: 'LOGIN',
      LOGOUT: 'LOGOUT',
    });
  });
});
