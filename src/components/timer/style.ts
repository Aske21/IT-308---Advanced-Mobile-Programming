/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export const timerStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: theme.spacing.medium,
    alignItems: 'center',
  },
  timerText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: theme.colors.highlight,
  },
  remainingTimeText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  timerContainer: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 999,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerButton: {
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.large,
    backgroundColor: theme.colors.primary,
  },
  timerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  resetButton: {
    marginTop: theme.spacing.medium,
    paddingVertical: theme.spacing.small,
    paddingHorizontal: theme.spacing.medium,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.highlight,
  },
});
