/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

const BottomMenu: React.FC = () => {
  // TODO: Replace with real navigation and add icons
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Text style={styles.text}>Settings</Text>
      </View>
    </View>
  );
};

export default BottomMenu;
