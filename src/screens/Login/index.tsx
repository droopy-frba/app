import React, { useState } from 'react';

import Box from '@/components/Box';
import Button from '@/components/Button';
import TextInput from '@/components/Inputs/TextInput';
import RegisterFlowLayout from '@/components/Layout/RegisterFlowLayout';

import { BoxWrapper, ButtonWrapper, ButtonsWrapper, ForgotPassword, InputWrapper } from './styles';
import { ILoginProps } from './types';

const Login = (props: ILoginProps) => {
  // @todo migrate to formik
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <RegisterFlowLayout>
      <BoxWrapper>
        <Box variant="light">
          <>
            <InputWrapper>
              <TextInput
                onChange={(value: string) => setEmail(value)}
                placeholder="Email"
                icon={{}}
              />
            </InputWrapper>
            <InputWrapper>
              <TextInput
                onChange={(value: string) => setPassword(value)}
                placeholder="Contraseña"
                icon={{}}
                password
              />
            </InputWrapper>
            <ForgotPassword>¿Ha olvidado su contraseña?</ForgotPassword>
            <ButtonsWrapper>
              <ButtonWrapper>
                <Button title="Ingresar" onPress={() => props.onLogin(email, password)} />
              </ButtonWrapper>
              <ButtonWrapper>
                <Button inverted title="Crear cuenta" onPress={() => {}} />
              </ButtonWrapper>
            </ButtonsWrapper>
          </>
        </Box>
      </BoxWrapper>
    </RegisterFlowLayout>
  );
};

export default Login;
