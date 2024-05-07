/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

type BottomMenuProps = {
  onPress: () => void;
};

const BottomMenu: React.FC<BottomMenuProps> = props => {
  const {onPress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={onPress}>
        <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomMenu;
