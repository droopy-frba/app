import React from 'react';

import Button from '@/components/Button';
import CurveBackgroundLayout from '@/components/Layout/CurveBackgroundLayout';
import LayoutTitle from '@/components/Layout/CurveBackgroundLayout/components/LayoutTitle';
import { ERoutes } from '@/navigation/routes';
import { useNavigation } from '@react-navigation/native';

import { ButtonWrapper } from './styles';
import { ISignupUserPhotoTakenProps } from './types';

const SignupUserPhotoTaken = (props: ISignupUserPhotoTakenProps) => {
  const navigation = useNavigation();

  return (
    <>
      <CurveBackgroundLayout>
        <>
          <LayoutTitle title="¡Excelente!" subtitle="Revisa que tu cara se puede ver claramente" />
          <ButtonWrapper position="top">
            <Button title="Tomar otra foto" onPress={() => {}} inverted />
          </ButtonWrapper>
        </>
      </CurveBackgroundLayout>
      <ButtonWrapper position="bottom">
        <Button
          title="¡Crear cuenta!"
          onPress={() => navigation.navigate(ERoutes.VerificationCode)}
        />
      </ButtonWrapper>
    </>
  );
};

export default SignupUserPhotoTaken;
