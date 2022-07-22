import styled from 'styled-components/native';

import { IButtonWrapperProps } from './types';

export const ButtonWrapper = styled.View<IButtonWrapperProps>`
  width: 100%;
  padding: ${(props) => (props.position === 'top' ? '0' : '20px')};
  margin-top: ${(props) => (props.position === 'top' ? '40px' : '0')};
  position: ${(props) => (props.position === 'top' ? 'relative' : 'absolute')};
  bottom: ${(props) => (props.position === 'top' ? '0' : '20px')};
`;
