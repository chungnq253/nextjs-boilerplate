import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootMiddleware from './middleware';

import appReducer from './app';

const nodeEnv = process.env.NEXT_PUBLIC_NODE_ENV;

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (nodeEnv !== 'production') {
  middlewares.push(logger);
}

const stores = configureStore({
  reducer: {
    app: appReducer,
  },
  devTools: nodeEnv !== 'production',
  middleware: (getDefaultMiddleware) => (getDefaultMiddleware().concat(middlewares)),
});

sagaMiddleware.run(rootMiddleware);

export default stores;
