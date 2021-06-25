import { DefaultTheme } from 'styled-components';

const fontSizes = [12, 14, 16, 18, 24, 34, 58, 72];

const colors = {
  primary: {
    light: '#FFF0DE',
    main: '#F9A109',
    dark: '#c78107',
  },
  secondary: {
    light: '#78d6f5',
    main: '#56CCF2',
    dark: '#45a3c2',
  },
  danger: {
    light: '#ee8277',
    main: '#e95e50',
    dark: '#d04436',
  },
  success: {
    light: '#6ddb9c',
    main: '#43d17f',
    dark: '#29b866',
  },
  info: {
    light: '#7fe6fc',
    main: '#5adffb',
    dark: '#41c5e2',
  },
  warining: {
    light: '#e0874d',
    main: '#d7651a',
    dark: '#be4c00',
  },
  text: {
    main: '#1b1f26',
    secondary: '#272c36',
  },
  textInverse: {
    main: '#fff',
    secondary: '#e9eaeb',
  },
  bgInverse: '#272c36',
  bg: '#FAFAFE',
  borderColor: 'rgba(191,196,209,.5)',
  borderFocus: 'rgba(39,44,54,.8)',
};

const lineHeight = 1.5;
const fontFamily = "'Quicksand', Helvetica, sans-serif";
const fontWeights = [500, 600, 700];

const Theme: DefaultTheme = {
  colors,
  lineHeight,
  fontFamily,
  fontSizes,
  fontWeights,
  fontSizeBase: fontSizes[2],
  borderRadius: '12px',
};

export default Theme;
