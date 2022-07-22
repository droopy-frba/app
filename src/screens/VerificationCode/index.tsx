import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import useDetectKeyboardOpen from 'use-detect-keyboard-open';

import RocketLaunch from '@/assets/animations/rocket-launch.json';
import Button from '@/components/Button';
import CurveBackgroundLayout from '@/components/Layout/CurveBackgroundLayout';
import LottiePlayer from '@/components/LottiePlayer';
import { useKeyboardVisible } from '@/hooks/useKeyboardVisible';

import CodeInput from './components/CodeInput';
import {
  ButtonWrapper,
  ButtonsWrapper,
  CodeWrapper,
  Email,
  LottieWrapper,
  ResendCode,
  Title,
  TitleWrapper,
} from './styles';
import { IVerificationCodeProps } from './types';

const VerificationCode = (props: IVerificationCodeProps) => {
  const isKeyboardVisible = useKeyboardVisible();
  const codeForm = useFormik({
    initialValues: {
      code: '',
    },
    onSubmit: () => {
      console.log('submiting code: ', codeForm.values.code);
    },
  });

  return (
    <>
      <CurveBackgroundLayout>
        <>
          <LottieWrapper>
            <LottiePlayer src={RocketLaunch} width={200} height={200} />
          </LottieWrapper>
          {!isKeyboardVisible && (
            <TitleWrapper>
              <Title>Hemos enviado un codigo de verificación a</Title>
              <Email>leo.guerberg@gmail.com</Email>
            </TitleWrapper>
          )}
          <CodeWrapper isKeyboardVisible={isKeyboardVisible}>
            <CodeInput onChange={(code: string) => codeForm.setFieldValue('code', code)} />
          </CodeWrapper>
        </>
      </CurveBackgroundLayout>
      {!isKeyboardVisible && (
        <ButtonsWrapper>
          <ButtonWrapper>
            <ResendCode onPress={() => {}}> Reenviar código </ResendCode>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button title="¡Finalizar!" onPress={codeForm.handleSubmit} />
          </ButtonWrapper>
        </ButtonsWrapper>
      )}
    </>
  );
};

export default VerificationCode;
