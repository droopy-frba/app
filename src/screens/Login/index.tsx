import React, { useState } from 'react';

import Box from '@/components/Box';
import Button from '@/components/Button';
import TextInput from '@/components/Inputs/TextInput';
import CurveBackgroundLayout from '@/components/Layout/CurveBackgroundLayout';
import { ERoutes } from '@/navigation/routes';
import { useNavigation } from '@react-navigation/native';

import { BoxWrapper, ButtonWrapper, ButtonsWrapper, ForgotPassword, InputWrapper } from './styles';
import { ILoginProps } from './types';

const Login = (props: ILoginProps) => {
  // @todo migrate to formik
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  return (
    <CurveBackgroundLayout>
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
                <Button
                  inverted
                  title="Crear cuenta"
                  onPress={() => navigation.navigate(ERoutes.SignUpTypeOfUser)}
                />
              </ButtonWrapper>
            </ButtonsWrapper>
          </>
        </Box>
      </BoxWrapper>
    </CurveBackgroundLayout>
  );
};

export default Login;
