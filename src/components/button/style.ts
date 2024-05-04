/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export const buttonStyles = StyleSheet.create({
  button: {
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
    borderRadius: theme.borderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
});
