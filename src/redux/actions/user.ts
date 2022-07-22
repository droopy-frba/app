import * as userConstants from 'src/redux/constants/user';

import { IAPIResponse } from '@/interfaces/api';
import { IUser } from '@/interfaces/user';

export const loginRequested = (email: string, password: string) => {
  return {
    type: userConstants.USER_ON_LOGIN_REQUESTED,
    email,
    password,
  };
};

export const loginSucceded = (userLogged: IUser, token: string) => {
  return {
    type: userConstants.USER_ON_LOGIN_SUCCEEDED,
    userLogged,
    token,
  };
};

export const loginFailed = (error: IAPIResponse) => {
  return {
    type: userConstants.USER_ON_LOGIN_FAILED,
    error,
  };
};
