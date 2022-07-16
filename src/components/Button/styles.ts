import styled from 'styled-components/native';

import { IStyledButtonProps } from './types';

export const StyledText = styled.Text<IStyledButtonProps>`
  font-family: ${(props) => props.theme.FONTS.REGULAR};
  font-size: 16px;
  color: ${(props) =>
    props.inverted ? props.theme.COLORS.PRINCIPAL_300 : props.theme.COLORS.WHITE};
`;

export const StyledButton = styled.TouchableOpacity<IStyledButtonProps>`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.COLORS.PRINCIPAL_300};
  background-color: ${(props) =>
    props.inverted ? props.theme.COLORS.WHITE : props.theme.COLORS.PRINCIPAL_300};
`;
