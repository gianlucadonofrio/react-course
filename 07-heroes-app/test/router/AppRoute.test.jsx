import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/routes/AppRouter';

describe('Pruebas en <AppRouter />', () => {
  test('debe de mostrar el login si no esta autenticado', () => {
    const contextValue = {
      logged: false,
    };
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByText('Login').length).toBe(2);
  });

  test('debe de mostrar el componente marvel si esta autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Gianluca',
        id: '123',
      },
    };
    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
  });
});
