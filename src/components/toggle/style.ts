/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

export const toggleStyles = StyleSheet.create({
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
    fontWeight: '600',
  },
});
