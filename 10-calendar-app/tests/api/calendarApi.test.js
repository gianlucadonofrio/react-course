import calendarApi from '../../src/api/calendarApi';

describe('pruebas en el CalendarApi', () => {
  test('debe de tener la configuracion por defecto', () => {
    expect(calendarApi.defaults.baseURL).toBe(process.env.REACT_APP_API_URL);
  });

  test('debe de tener el x-token en el header de todas las peticiones', async () => {
    const token = '123456';
    localStorage.setItem('token', token);
    const resp = await calendarApi
      .get('/auth')
      .then((resp) => resp)
      .catch((err) => err);
    expect(resp.config.headers['x-token']).toBe(token);
  });
});
