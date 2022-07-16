import React from 'react';

import Box from '@/components/Box';
import Button from '@/components/Button';
import TextInput from '@/components/Inputs/TextInput';

import { LoginWrapper } from './styles';
import { ILoginProps } from './types';

const Login = (props: ILoginProps) => {
  return (
    <LoginWrapper>
      <Box variant="light">
        <>
          <Button
            inverted
            title="Ingresar"
            onPress={() => props.onLogin('leo.guerberg@gmail.com', 'password')}
          />
          <TextInput
            placeholder="Email"
            value={''}
            onChange={(e: any) => console.log('e', e.target.value)}
            type="default"
            icon={{}}
          />
        </>
      </Box>
    </LoginWrapper>
  );
};

export default Login;
