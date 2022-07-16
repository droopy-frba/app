import styled from 'styled-components/native';

import { IBoxWrapperProps } from './types';

export const StyledBox = styled.View<IBoxWrapperProps>`
  width: 100%;
  height: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${(props) =>
    props.variant === 'light'
      ? props.theme.COLORS.PRINCIPAL_100
      : props.theme.COLORS.PRINCIPAL_400};
`;
