import axios from 'axios';

const calendarApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

calendarApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token'),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  return config;
});
export default calendarApi;
