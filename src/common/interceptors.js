import { Api, PublicApi } from '@common/Api';
import { logout, getToken } from '@services/AuthService';

export function initialize() {

  Api.interceptors.response.use(
    (response) => response,
    (error) => {
      const code = error?.response?.status;
      switch (code) {
        case 403:
          logout();
          break;
        case 500:
        default:
          return Promise.reject({ message: error, code });
      }
      return null;
    }
  );

  Api.interceptors.request.use(
    (prevConfig) => {
      const config = { ...prevConfig };
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  PublicApi.interceptors.response.use(
    (response) => response,
    (error) => {
      const code = error?.response?.status;
      switch (code) {
        case 500:
        default:
          return Promise.reject({
            message: error,
            code
          });
      }
    }
  );
}
