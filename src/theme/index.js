const colors = {
  primary: '#4318FF',
  secondary: '#39B8FF',
  success: '#01B574',
  warning: '#FFB547',
  error: '#E31A1A',
  light: '#E9EDF7',
  dark: '#1B2559',
  white: '#FFFFFF',
  black: '#0B1437',
  gray: {
    50: '#F8F9FA',
    100: '#E9EDF7',
    200: '#D3DBE7',
    300: '#A3AED0',
    400: '#707EAE',
    500: '#4D5E80',
    600: '#2B3674',
    700: '#384262',
    800: '#1B2559',
    900: '#0B1437'
  }
};

const typography = {
  h1: {
    fontSize: 48,
    lineHeight: 58,
    fontWeight: '700'
  },
  h2: {
    fontSize: 36,
    lineHeight: 46,
    fontWeight: '700'
  },
  h3: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: '600'
  },
  h4: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600'
  },
  body1: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '400'
  },
  body2: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400'
  },
  caption: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400'
  }
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48
};

const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  circle: '50%'
};

const shadows = {
  sm: '0 2px 4px rgba(11, 20, 55, 0.08)',
  md: '0 4px 8px rgba(11, 20, 55, 0.12)',
  lg: '0 8px 16px rgba(11, 20, 55, 0.16)',
  xl: '0 12px 24px rgba(11, 20, 55, 0.20)'
};

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows
};