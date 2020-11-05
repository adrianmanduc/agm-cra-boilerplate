import { Api, PublicApi } from '@common/Api';
import { CONFIG } from '@constants';
import { stall } from '@helpers/utils';

export async function getUser() {
  const token = getToken();
  if (!token) {
    return Promise.resolve(null);
  }
  return new Promise((resolve) => {
    resolve({ email: 'matcha@admin.com' });
  });
}

export function login(data) {
  return PublicApi
    .post('/login', data)
    .then((response) => {
      const { token } = response.data;
      setToken(token);
      return response;
    });
}

export function register(data) {
  return PublicApi
    .post('/register', { data })
    .then((response) => {
      return response.data;
    });
}

export function logout() {
  deleteToken();
  return Promise.resolve();
}

function setToken(token) {
  localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(token));
}

export function getToken() {
  return JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEY));
}

function deleteToken() {
  localStorage.removeItem(CONFIG.STORAGE_KEY);
}
