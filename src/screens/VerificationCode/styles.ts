import styled from 'styled-components/native';

import { ICodeWrapperProps } from './types';

export const TitleWrapper = styled.View`
  top: 230px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: ${(props) => props.theme.COLORS.WHITE};
  font-family: ${(props) => props.theme.FONTS.REGULAR};
  text-align: center;
  margin-bottom: 20px;
`;

export const Email = styled.Text`
  font-size: 25px;
  color: ${(props) => props.theme.COLORS.WHITE};
  font-family: ${(props) => props.theme.FONTS.SEMI_BOLD};
  text-align: center;
`;

export const ButtonWrapper = styled.View`
  padding: 10px 0;
`;

export const LottieWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 25%;
`;

export const CodeWrapper = styled.View<ICodeWrapperProps>`
  z-index: 2;
  top: ${(props) => (props.isKeyboardVisible ? '200px' : '40%')};
`;

export const ResendCode = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${(props) => props.theme.COLORS.PRINCIPAL_300};
  font-family: ${(props) => props.theme.FONTS.REGULAR};
`;

export const ButtonsWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 30px;
  padding: 0 20px;
`;
