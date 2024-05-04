/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export const inputStyles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.medium,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  label: {
    marginBottom: theme.spacing.small,
    color: theme.colors.text,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.small,
    fontSize: theme.typography.p.fontSize,
    color: theme.colors.text,
    width: '60%',
  },
});
