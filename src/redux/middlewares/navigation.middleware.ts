import { AnyAction, MiddlewareAPI } from 'redux';

const navigationMiddleware =
  (state: MiddlewareAPI) => (next: (action: AnyAction) => void) => (action: AnyAction) => {};

export default navigationMiddleware;
