/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput, Text, KeyboardTypeOptions} from 'react-native';
import {inputStyles} from './style';

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
}) => {
  return (
    <View style={inputStyles.container}>
      <Text style={inputStyles.label}>{label}</Text>
      <TextInput
        style={inputStyles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#A9A9A9"
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;
