/* eslint-disable prettier/prettier */
import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import {theme, TypographyVariant} from '../../constants/theme';
import {buttonStyles} from './style';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({children, textStyle, ...props}) => {
  const textVariant: TypographyVariant = 'h3';

  return (
    <TouchableOpacity
      style={[buttonStyles.button, {backgroundColor: theme.colors.background}]}
      {...props}>
      <Text
        style={[
          theme.typography[textVariant],
          {color: theme.colors.text},
          textStyle,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
