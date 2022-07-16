import styled from 'styled-components/native';

export const StyledTextInput = styled.TextInput`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.COLORS.WHITE};
  font-family: ${(props) => props.theme.FONTS.REGULAR};
  color: ${(props) => props.theme.COLORS.NEUTRAL_200};
  font-size: 16px;
`;
