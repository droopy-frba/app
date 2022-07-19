import { useFormik } from 'formik';
import React from 'react';

import PasswordLockAnimation from '@/assets/animations/register/password-lock.json';
import Box from '@/components/Box';
import Button from '@/components/Button';
import TextInput from '@/components/Inputs/TextInput';
import CurveBackgroundLayout from '@/components/Layout/CurveBackgroundLayout';
import LayoutTitle from '@/components/Layout/CurveBackgroundLayout/components/LayoutTitle';
import LottiePlayer from '@/components/LottiePlayer';
import { useNavigation } from '@react-navigation/native';

import { BoxWrapper, ButtonWrapper, InputWrapper, LockWrapper } from './styles';
import { ISignupUserPasswordProps } from './types';

const SingupUserPassword = (props: ISignupUserPasswordProps) => {
  const navigation = useNavigation();
  const passwordForm = useFormik({
    initialValues: {
      password: '',
      passwordConfirmation: '',
    },
    onSubmit: () => {
      console.log('submiting: ', passwordForm.values);
      navigation.navigate('Signup - User Photo');
    },
  });

  return (
    <>
      <CurveBackgroundLayout>
        <>
          <LayoutTitle title="¡Ya casi estamos!" subtitle="Solo falta proteger tu cuenta." />
          <BoxWrapper>
            <Box>
              <>
                <LockWrapper>
                  <LottiePlayer src={PasswordLockAnimation} width={200} height={200} />
                </LockWrapper>
                <InputWrapper>
                  <TextInput
                    onChange={passwordForm.handleChange('password')}
                    placeholder="Contraseña"
                    icon={{}}
                  />
                </InputWrapper>
                <InputWrapper>
                  <TextInput
                    onChange={passwordForm.handleChange('passwordConfirmation')}
                    placeholder="Confirmación de contraseña"
                    icon={{}}
                  />
                </InputWrapper>
              </>
            </Box>
          </BoxWrapper>
        </>
      </CurveBackgroundLayout>
      <ButtonWrapper>
        <Button title="Siguiente" onPress={passwordForm.handleSubmit} />
      </ButtonWrapper>
    </>
  );
};

export default SingupUserPassword;
