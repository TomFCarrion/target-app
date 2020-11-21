import { compose } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { startsWith } from 'lodash';

import reducer from 'state/reducers';

const logger = createLogger({
  collapsed: true,
  predicate: (_, { type }) => !startsWith(type, '@@router')
});

const store = configureStore(process.env.NODE_ENV === 'production'
  ? { reducer }
  : {
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    enhancers: (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose
  }
);

if ((module as any).hot) {
  // Enable Webpack hot module replacement for reducers
  (module as any).hot.accept('../reducers', () => {
    const nextReducer = require('../reducers').default;
    store.replaceReducer(nextReducer);
  });
}

const persistor = persistStore(store);

export type StoreType = typeof store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export { store, persistor };
