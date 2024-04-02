/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    color: theme.colors.surface,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  text: {
    fontSize: 22,
    color: theme.colors.text,
  },
});
