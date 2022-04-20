import axios from 'axios';
import customHistory from './custom-history';


export const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    'content-type': 'application/json',
  },
})

api.interceptors.response.use(
  (response) => response,
  function (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.status === 404) {
          customHistory.replace('/not-found')
        }
      }
    }
    return Promise.reject(error);
  }
)