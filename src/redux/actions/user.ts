import * as userConstants from 'src/redux/constants/user';

export const loginRequested = (email: string, password: string) => {
  return {
    type: userConstants.USER_ON_LOGIN_REQUESTED,
    email,
    password,
  };
};

export const loginSucceded = (authToken: string) => {
  return {
    type: userConstants.USER_ON_LOGIN_SUCCEEDED,
    authToken,
  };
};

export const loginFailed = (errorMessage: string) => {
  return {
    type: userConstants.USER_ON_LOGIN_FAILED,
    errorMessage,
  };
};
