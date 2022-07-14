const lightTheme = {
  COLORS: {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    PRINCIPAL_100: '#E9E5FF',
    PRINCIPAL_200: '#7972E7',
    PRINCIPAL_300: '#464186',
    PRINCIPAL_400: '#2E2A5E',
    PRINCIPAL_500: '#232049',
    NEUTRAL_100: '#E2E2E2',
    NEUTRAL_200: '#A6A6A6',
    NEUTRAL_300: '#737373',
  },
  FONTS: {
    REGULAR: 'OpenSans_400Regular',
    SEMI_BOLD: 'OpenSans_600SemiBold',
    BOLD: 'OpenSans_700Bold',
  },
  SPACING: {},
};

export type ITheme = typeof lightTheme;

export default lightTheme;
