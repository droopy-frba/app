import LottieView from 'lottie-react-native';
import React, { useRef } from 'react';

import { ILottiePlayerProps } from './types';

const LottiePlayer = (props: ILottiePlayerProps) => {
  const animation = useRef(null) as any;

  return (
    <LottieView
      autoPlay
      ref={animation}
      style={{
        width: props.width,
        height: props.height,
      }}
      source={props.src}
    />
  );
};

export default LottiePlayer;
