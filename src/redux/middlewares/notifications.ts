import { showMessage } from 'react-native-flash-message';
import { AnyAction, MiddlewareAPI } from 'redux';

import * as userConstants from '@/redux/constants/user';

const notificationsMiddleware =
  (state: MiddlewareAPI) => (next: (action: AnyAction) => void) => (action: AnyAction) => {
    switch (action.type) {
      case userConstants.USER_ON_LOGIN_FAILED:
        showMessage({
          message:
            action.error.statusCode === 401
              ? 'Credenciales inválidas'
              : 'Ocurrió un error en el servidor.',
          type: 'danger',
        });
    }
    next(action);
  };

export default notificationsMiddleware;
