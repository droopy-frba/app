import React from 'react';
import { useDispatch } from 'react-redux';

import * as userActions from '@/redux/actions/user';
import Login from '@/screens/Login';

const LoginContainer = () => {
  const dispatch = useDispatch();

  const onLoginRequested = (email: string, password: string) => {
    console.log('Logging');
    // dispatch(userActions.loginRequested(email, password));
  };

  return <Login onLogin={onLoginRequested} />;
};

export default LoginContainer;
