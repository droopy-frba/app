import React from 'react';

import SelfiePersonAnimation from '@/assets/animations/register/selfie-person.json';
import Button from '@/components/Button';
import SolidBackgroundLayout from '@/components/Layout/SolidBackgroundLayout';
import LottiePlayer from '@/components/LottiePlayer';

import { ButtonWrapper, IdentityWrapper, Subtitle, Title } from './styles';
import { ISignupUserPhoto } from './types';

const SignupUserPhoto = (props: ISignupUserPhoto) => {
  return (
    <>
      <SolidBackgroundLayout>
        <>
          <IdentityWrapper>
            <LottiePlayer src={SelfiePersonAnimation} width={350} height={350} />
          </IdentityWrapper>
          <Title>¡Casi todo listo!</Title>
          <Subtitle>
            Solamente necesitamos que subas una foto de frente para que podamos conocerte mejor
          </Subtitle>
        </>
      </SolidBackgroundLayout>
      <ButtonWrapper>
        <Button title="Tomar foto" onPress={() => {}} inverted />
      </ButtonWrapper>
    </>
  );
};

export default SignupUserPhoto;
