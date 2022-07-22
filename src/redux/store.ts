import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import navigationMiddleware from './middlewares/navigation';
import notificationsMiddleware from './middlewares/notifications';
import storageMiddleware from './middlewares/storage';
import reducers from './reducers';
import { IUserReducerState } from './reducers/user';
import rootSaga from './sagas';

export const sagaMiddleware = createSagaMiddleware();

export interface IReduxState {
  user: IUserReducerState;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(
      notificationsMiddleware,
      storageMiddleware,
      navigationMiddleware,
      sagaMiddleware,
    ),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
