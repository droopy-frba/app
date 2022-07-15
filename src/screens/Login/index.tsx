import React from 'react';
import { Button } from 'react-native';

import { LoginWrapper } from './styles';
import { ILoginProps } from './types';

const Login = (props: ILoginProps) => {
  return (
    <LoginWrapper>
      <Button title="LOGIN" onPress={() => props.onLogin('leo.guerberg@gmail.com', 'password')} />
    </LoginWrapper>
  );
};

export default Login;
