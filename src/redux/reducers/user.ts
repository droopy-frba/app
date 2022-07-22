import { AnyAction } from 'redux';

import { IUser } from '@/interfaces/user';
import * as userConstants from '@/redux/constants/user';

export interface IUserReducerState {
  user: IUser | null;
  loading: boolean;
}

const defaultState: IUserReducerState = {
  user: null,
  loading: false,
};

const setLoading = (state: IUserReducerState, loading: boolean) => ({
  ...state,
  loading,
});

const setUser = (state: IUserReducerState, user: IUser) => ({
  ...state,
  user,
});

const userReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case userConstants.USER_ON_LOGIN_REQUESTED:
      return setLoading(state, true);
    case userConstants.USER_ON_LOGIN_FAILED:
      return setLoading(state, false);
    case userConstants.USER_ON_LOGIN_SUCCEEDED:
      return setUser(setLoading(state, false), action.userLogged);
    default:
      return state;
  }
};

export default userReducer;
