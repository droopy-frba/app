import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ILoginResponse } from '@/interfaces/api';
import * as userActions from '@/redux/actions/user';
import * as userConstants from '@/redux/constants/user';
import * as userService from '@/redux/services/user';

function* loginUser(action: AnyAction) {
  try {
    const loginResponse: ILoginResponse = yield call(
      userService.loginUser,
      action.email,
      action.password,
    );
    yield put(userActions.loginSucceded(loginResponse.user, loginResponse.token));
  } catch (error: any) {
    yield put(userActions.loginFailed(error.data));
  }
}

export default all([takeLatest(userConstants.USER_ON_LOGIN_REQUESTED, loginUser)]);
