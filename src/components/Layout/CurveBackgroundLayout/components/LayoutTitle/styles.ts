import styled from 'styled-components/native';

export const LayoutTitleWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: ${(props) => props.theme.COLORS.WHITE};
  font-family: ${(props) => props.theme.FONTS.SEMI_BOLD};
`;

export const Subtitle = styled.Text`
  font-size: 25px;
  color: ${(props) => props.theme.COLORS.WHITE};
  font-family: ${(props) => props.theme.FONTS.REGULAR};
`;
