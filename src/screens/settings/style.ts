/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  middleContent: {
    flex: 1,
    paddingVertical: 64,
    gap: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.medium,
    width: '100%',
  },
});
