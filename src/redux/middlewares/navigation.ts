import { AnyAction, MiddlewareAPI } from 'redux';

import { navigate } from '@/navigation';
import { ERoutes } from '@/navigation/routes';
import * as userConstants from '@/redux/constants/user';

const navigationMiddleware =
  (state: MiddlewareAPI) => (next: (action: AnyAction) => void) => (action: AnyAction) => {
    switch (action.type) {
      case userConstants.USER_ON_LOGIN_SUCCEEDED:
        // navigate(ERoutes.MainMenu,{})
        break;
    }
    next(action);
  };

export default navigationMiddleware;
