/* eslint-disable no-param-reassign */
import axios from 'axios';
import { CONFIG } from '@constants';

export const Api = axios.create({
  baseURL: CONFIG.API_URL,
  timeout: 10000,
});

export const PublicApi = axios.create({
  baseURL: CONFIG.API_URL,
  timeout: 10000,
});
