import React from 'react';

import { StyledButton, StyledText } from './styles';
import { IButtonProps } from './types';

const Button = (props: IButtonProps) => {
  return (
    <StyledButton onPress={props.onPress} inverted={props.inverted || false}>
      <StyledText inverted={props.inverted || false}>{props.title}</StyledText>
    </StyledButton>
  );
};

export default Button;
