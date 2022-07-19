import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';

import PasswordLockAnimation from '../../assets/animations/register/password-lock.json';
import { ILottiePlayerProps } from './types';

const LottiePlayer = (props: ILottiePlayerProps) => {
  const animation = useRef(null) as any;

  return (
    <LottieView
      autoPlay
      ref={animation}
      style={{
        width: 200,
        height: 200,
        backgroundColor: '#eee',
      }}
      source={require('../../assets/animations/register/password-lock.json')}
    />
  );
};

export default LottiePlayer;
