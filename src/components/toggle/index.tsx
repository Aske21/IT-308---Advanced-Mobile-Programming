/* eslint-disable prettier/prettier */
import React from 'react';
import {ColorValue, Switch, Text, View} from 'react-native';
import {toggleStyles} from './style';
import theme from '../../constants/theme';

interface ToggleProps {
  trackColor?:
    | {
        false?: ColorValue | null | undefined;
        true?: ColorValue | null | undefined;
      }
    | undefined;
  thumbColor?: ColorValue | undefined;
  ios_backgroundColor?: ColorValue | undefined;
  onValueChange?: ((value: boolean) => void | Promise<void>) | null | undefined;
  value: boolean;
}

const Toggle: React.FC<ToggleProps> = ({
  trackColor,
  thumbColor,
  ios_backgroundColor,
  onValueChange,
  value,
}) => {
  return (
    <View style={toggleStyles.container}>
      <Text style={toggleStyles.label}>Enable Quotes</Text>
      <Switch
        trackColor={trackColor || theme.colors.trackColor}
        thumbColor={thumbColor || theme.colors.highlight}
        ios_backgroundColor={ios_backgroundColor || theme.colors.surface}
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
};

export default Toggle;
