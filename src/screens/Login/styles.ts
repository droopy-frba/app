import styled from 'styled-components/native';

export const LoginWrapper = styled.View`
  background-color: ${(
    props,
  ) =>
    props
      .theme
      .COLORS
      .PRINCIPAL_500};
  font-family: ${(
    props,
  ) =>
    props
      .theme
      .FONTS
      .SEMI_BOLD};
`;
