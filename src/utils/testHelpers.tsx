import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { StoreType } from 'state/store';

export const withStore = (WrappedComponent: ReactNode, store: StoreType) => (
  <MemoryRouter>
    <Provider store={store}>{WrappedComponent}</Provider>
  </MemoryRouter>
);
