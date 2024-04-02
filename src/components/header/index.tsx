/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {headerStyles} from './style';

const Header: React.FC = () => {
  return (
    <View style={headerStyles.headerContainer}>
      <Text style={headerStyles.headerText}>ascee</Text>
    </View>
  );
};

export default Header;
