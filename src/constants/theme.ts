/* eslint-disable prettier/prettier */
import {TextStyle} from 'react-native';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'ps';

export const TypographyVariantMap: Record<TypographyVariant, TextStyle> = {
  h1: {
    fontSize: 28,
    lineHeight: 34,
  },
  h2: {
    fontSize: 25,
    lineHeight: 34,
  },
  h3: {
    fontSize: 21,
    lineHeight: 31,
  },
  h4: {
    fontSize: 17,
    lineHeight: 26,
  },
  p: {
    fontSize: 15,
    lineHeight: 23,
  },
  ps: {
    fontSize: 13,
    lineHeight: 20,
  },
};

export const Spacing = {
  small: 8,
  medium: 16,
  large: 24,
};

export const BorderRadius = {
  small: 4,
  medium: 8,
  large: 12,
};

export const Elevation = {
  small: 2,
  medium: 4,
  large: 8,
};

export const Animations = {
  duration: {
    short: 300,
    medium: 500,
    long: 1000,
  },
  easing: 'ease-in-out',
};

export const Breakpoints = {
  small: 0,
  medium: 600,
  large: 1024,
};

// reference for theme -> catpuccin theme (https://catppuccin.com/palette)
export const Colors = {
  primary: '#89b4fa',
  background: '#181825',
  surface: '#313244',
  text: '#cdd6f4',
  border: '#b4befe',
  highlight: '#cba6f7',
  trackColor: {
    false: '#e78284',
    true: '#313244',
  },
};

export const theme = {
  typography: TypographyVariantMap,
  spacing: Spacing,
  borderRadius: BorderRadius,
  elevation: Elevation,
  animations: Animations,
  breakpoints: Breakpoints,
  colors: Colors,
};

export default theme;
