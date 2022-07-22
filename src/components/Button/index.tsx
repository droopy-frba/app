import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { StyledButton, StyledText } from './styles';
import { IButtonProps } from './types';

const Button = (props: IButtonProps) => {
  const theme = useTheme();
  const isLoading = props.isLoading || false;

  return (
    <StyledButton onPress={props.onPress} inverted={props.inverted || false}>
      {isLoading ? (
        <ActivityIndicator
          color={props.inverted ? theme.COLORS.PRINCIPAL_300 : theme.COLORS.WHITE}
        />
      ) : (
        <StyledText inverted={props.inverted || false}>{props.title}</StyledText>
      )}
    </StyledButton>
  );
};

export default Button;
