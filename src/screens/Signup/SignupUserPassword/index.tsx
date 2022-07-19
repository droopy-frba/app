import React from 'react';

import Box from '@/components/Box';
import Button from '@/components/Button';
import RegisterFlowLayout from '@/components/Layout/RegisterFlowLayout';
import LayoutTitle from '@/components/Layout/RegisterFlowLayout/components/LayoutTitle';
import LottiePlayer from '@/components/LottiePlayer';

import PasswordLockAnimation from '../../../assets/animations/register/password-lock.json';
import { BoxWrapper, ButtonWrapper } from './styles';
import { ISignupUserPasswordProps } from './types';

const SingupUserPassword = (props: ISignupUserPasswordProps) => {
  return (
    <>
      <RegisterFlowLayout>
        <>
          <LayoutTitle title="¡Ya casi estamos!" subtitle="Solo falta proteger tu cuenta." />
          <BoxWrapper>
            <Box>
              <>
                <LottiePlayer src="../../assets/animations/register/password-lock.json" />
              </>
            </Box>
          </BoxWrapper>
        </>
      </RegisterFlowLayout>
      <ButtonWrapper>
        <Button title="Siguiente" onPress={() => {}} />
      </ButtonWrapper>
    </>
  );
};

export default SingupUserPassword;
