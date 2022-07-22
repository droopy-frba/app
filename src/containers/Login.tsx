import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import * as userActions from '@/redux/actions/user';
import userLoadingSelector from '@/redux/selectors/user/loading';
import Login from '@/screens/Login';

const LoginContainer = () => {
  const dispatch = useDispatch();

  const loading = useTypedSelector(userLoadingSelector());

  const onLoginRequested = (email: string, password: string) => {
    dispatch(userActions.loginRequested(email, password));
  };

  return <Login onLogin={onLoginRequested} isLoading={loading} />;
};

export default LoginContainer;
