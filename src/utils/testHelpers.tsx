import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import MockAdapter from 'axios-mock-adapter';

import reducer from 'state/reducers';
import httpClient from 'httpClient';
import applyDefaultInterceptors from 'httpClient/applyDefaultInterceptors';
import { StoreType } from 'state/store';

export const configureStore = (initialState = {}) => {
  return createStore(reducer, initialState, applyMiddleware(...getDefaultMiddleware()));
};

export const configureAuthenticatedStore = (initialState = {}) =>
  configureStore({
    session: {
      token: 'token',
      authenticated: true,
    },
    ...initialState,
  });

export const renderWithRedux = (Component: () => ReactElement, store: StoreType): any => ({
  ...render(
    <Provider store={store}>
      <Component />
    </Provider>,
  ),
  store,
});

export const mockedHttpClient = (store: StoreType, options = {}) => {
  applyDefaultInterceptors(store, httpClient);

  return new MockAdapter(httpClient, options);
};