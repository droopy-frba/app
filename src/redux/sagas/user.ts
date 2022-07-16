import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as userActions from '@/redux/actions/user';
import * as userConstants from '@/redux/constants/user';
import * as userService from '@/redux/services/user';

function* loginUser(action: AnyAction) {
  try {
    const loggedToken: string = yield call(userService.loginUser, action.email, action.password);
    console.log('loggedToken', loggedToken);
    yield put(userActions.loginSucceded(loggedToken));
  } catch (error: any) {
    yield put(userActions.loginFailed(error.data.message));
  }
}

export default all([takeLatest(userConstants.USER_ON_LOGIN_REQUESTED, loginUser)]);
