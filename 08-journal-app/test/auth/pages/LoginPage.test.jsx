const { configureStore } = require('@reduxjs/toolkit');
const { render, screen, fireEvent } = require('@testing-library/react');
const { Provider } = require('react-redux');
const { MemoryRouter } = require('react-router-dom');
const { LoginPage } = require('../../../src/auth/pages/LoginPage');
const { authSlice } = require('../../../src/store/auth/authSlide');
const { notAuthenticatedState } = require('../../fixtures/authFixtures');

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startLoginWithEmailPassword: ({ email, password }) => {
    return () => mockStartLoginWithEmailPassword(email, password);
  },
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: notAuthenticatedState,
  },
});

describe('Pruebas en LoginPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('debe de mostrarse correctamente', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
  });
  test('debe de llamar el startGoogleSignIn', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
    const googleBtn = screen.getByLabelText('google-btn');
    fireEvent.click(googleBtn);
    expect(mockStartGoogleSignIn).toHaveBeenCalled();
  });

  test('debe de llamar startLoginWithEmailAndPassword', () => {
    const email = 'gian.donofrio@gmail.com';
    const password = '123456';

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
    const emailInput = screen.getByRole('textbox', { name: 'Correo' });
    fireEvent.change(emailInput, { target: { name: 'email', value: email } });

    const passwordInput = screen.getByTestId('password');
    fireEvent.change(passwordInput, {
      target: { name: 'password', value: password },
    });

    const submitBtn = screen.getByLabelText('submit-form');
    fireEvent.submit(submitBtn);

    expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith(email, password);
    
  });


});
