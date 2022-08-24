import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { REACT_APP_API_URL } = getEnvVariables();

const calendarApi = axios.create({
  baseURL: REACT_APP_API_URL,
});

calendarApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };

  return config;
});
export default calendarApi;
