import { EnhancedStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { logout, updateSession } from 'state/actions/userActions';
import { AppDispatch } from '../state/store';

const ACCESS_TOKEN = 'access-token';
const UNAUTHORIZED = 401;

const applyDefaultInterceptors = (
  store: EnhancedStore,
  client: AxiosInstance
) => {
  const dispatch: AppDispatch = store.dispatch;

  client.interceptors.request.use((config) => {
    const { accessToken } = store.getState().session;
    const { headers } = config;
    if (accessToken) {
      config.headers = {
        ...headers,
        [ACCESS_TOKEN]: accessToken
      };
    }
    return config;
  });

  client.interceptors.response.use(
    async (response) => {
      const { headers } = response;
      const accessToken = headers[ACCESS_TOKEN];
      if (accessToken) {
        const session = {
          accessToken
        };
        dispatch(updateSession(session));
      }
      return response;
    },
    (error) => {
      if (error.response && error.response.status === UNAUTHORIZED) {
        dispatch(logout());
      }

      return Promise.reject(error);
    }
  );
};

export default applyDefaultInterceptors;
