import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components/native';

import CurveBackground from '@/assets/images/background-curve.svg';

import { CurveBackgroundWrapper, LayoutWrapper } from './styles';
import { ICurveBackgroundLayoutProps } from './types';

const CurveBackgroundLayout = (props: ICurveBackgroundLayoutProps) => {
  const theme = useTheme();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LayoutWrapper
        colors={[theme.COLORS.PRINCIPAL_300, theme.COLORS.WHITE]}
        locations={[0.5, 0.5]}
      >
        {props.children}
        <CurveBackgroundWrapper>
          <CurveBackground />
        </CurveBackgroundWrapper>
      </LayoutWrapper>
    </TouchableWithoutFeedback>
  );
};

export default CurveBackgroundLayout;
