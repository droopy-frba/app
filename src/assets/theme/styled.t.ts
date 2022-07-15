import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: {
      WHITE: string;
      BLACK: string;
      PRINCIPAL_100: string;
      PRINCIPAL_200: string;
      PRINCIPAL_300: string;
      PRINCIPAL_400: string;
      PRINCIPAL_500: string;
      NEUTRAL_100: string;
      NEUTRAL_200: string;
      NEUTRAL_300: string;
    };
    FONTS: {
      REGULAR: string;
      SEMI_BOLD: string;
      BOLD: string;
    };
    SPACING: {};
  }
}
