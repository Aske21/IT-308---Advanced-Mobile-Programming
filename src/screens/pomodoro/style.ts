/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  middleContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 48,
  },
  timer: {
    fontSize: 40,
    color: theme.colors.text,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.background,
  },
});
