import { AnyAction, MiddlewareAPI } from 'redux';

const navigationMiddleware =
  (state: MiddlewareAPI) => (next: (action: AnyAction) => void) => (action: AnyAction) => {
    switch (action.type) {
    }
    next(action);
  };

export default navigationMiddleware;
