/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export const quoteStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: theme.spacing.large,
    left: theme.spacing.large,
    right: theme.spacing.large,
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: theme.spacing.medium,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.medium,
  },
  quoteText: {
    fontStyle: 'italic',
    color: theme.colors.text,
    textAlign: 'center',
    fontSize: 16,
  },
});
