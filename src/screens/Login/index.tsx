import { useFormik } from 'formik';
import React from 'react';

import Box from '@/components/Box';
import Button from '@/components/Button';
import TextInput from '@/components/Inputs/TextInput';
import CurveBackgroundLayout from '@/components/Layout/CurveBackgroundLayout';
import { ERoutes } from '@/navigation/routes';
import { useNavigation } from '@react-navigation/native';

import { BoxWrapper, ButtonWrapper, ButtonsWrapper, ForgotPassword, InputWrapper } from './styles';
import { ILoginProps } from './types';

const Login = (props: ILoginProps) => {
  const navigation = useNavigation();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {
      props.onLogin(loginForm.values.email, loginForm.values.password);
    },
  });

  return (
    <CurveBackgroundLayout>
      <BoxWrapper>
        <Box variant="light">
          <>
            <InputWrapper>
              <TextInput onChange={loginForm.handleChange('email')} placeholder="Email" icon={{}} />
            </InputWrapper>
            <InputWrapper>
              <TextInput
                onChange={loginForm.handleChange('password')}
                placeholder="Contraseña"
                icon={{}}
                password
              />
            </InputWrapper>
            <ForgotPassword>¿Ha olvidado su contraseña?</ForgotPassword>
            <ButtonsWrapper>
              <ButtonWrapper>
                <Button
                  title="Ingresar"
                  onPress={loginForm.handleSubmit}
                  isLoading={props.isLoading}
                />
              </ButtonWrapper>
              <ButtonWrapper>
                <Button
                  inverted
                  title="Crear cuenta"
                  isLoading={props.isLoading}
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
