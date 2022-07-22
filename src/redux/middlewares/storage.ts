import { AnyAction, MiddlewareAPI } from 'redux';

const storageMiddleware =
  (state: MiddlewareAPI) => (next: (action: AnyAction) => void) => (action: AnyAction) => {
    switch (action.type) {
    }
    next(action);
  };

export default storageMiddleware;
