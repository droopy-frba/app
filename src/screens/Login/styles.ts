import styled from 'styled-components/native';

export const InputWrapper = styled.View`
  width: 100%;
  padding: 10px 0;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  padding: 10px;
`;

export const ButtonsWrapper = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ForgotPassword = styled.Text`
  font-family: ${(props) => props.theme.FONTS.REGULAR};
  color: ${(props) => props.theme.COLORS.PRINCIPAL_300};
  font-size: 14px;
  text-align: right;
`;

export const BoxWrapper = styled.View`
  z-index: 2;
  top: 20%;
  justify-content: center;
  align-items: center;
`;
