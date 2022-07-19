import styled from 'styled-components/native';

export const BoxWrapper = styled.TouchableOpacity`
  z-index: 2;
  margin: 40px auto 0 auto;
  width: 250px;
`;

export const UserType = styled.Text`
  font-size: 25px;
  color: ${(props) => props.theme.COLORS.PRINCIPAL_300};
  font-family: ${(props) => props.theme.FONTS.SEMI_BOLD};
  margin-bottom: 20px;
  text-align: center;
`;

export const PersonWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;
