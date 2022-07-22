import styled from 'styled-components/native';

export const IdentityWrapper = styled.View`
  margin-bottom: 30px;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  padding: 20px;
  position: absolute;
  bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.COLORS.WHITE};
  font-family: ${(props) => props.theme.FONTS.SEMI_BOLD};
  text-align: center;
  margin-bottom: 20px;
`;

export const Subtitle = styled.Text`
  font-size: 25px;
  color: ${(props) => props.theme.COLORS.WHITE};
  font-family: ${(props) => props.theme.FONTS.REGULAR};
  text-align: center;
`;
