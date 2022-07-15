import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import navigationMiddleware from './middlewares/navigation.middleware';
import reducers from './reducers';
import rootSaga from './sagas';

export const sagaMiddleware = createSagaMiddleware();

export interface IReduxState {}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(navigationMiddleware, sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
