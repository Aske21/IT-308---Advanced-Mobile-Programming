/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Button from '../../components/button';
import Header from '../../components/header';
import Input from '../../components/input';
import Toggle from '../../components/toggle';
import {styles} from './style';

const Settings: React.FC = () => {
  // TODO: Use global state management (redux) -> dispatch actions
  const saveSettings = () => {
    console.log('save');
  };

  const toggleQuote = () => {
    console.log('toggled');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={styles.middleContent}>
        <View style={styles.settingItem}>
          <Input
            label={'Work duration'}
            value={'0:05'}
            onChangeText={e => console.log(e)}
          />
        </View>
        <View style={styles.settingItem}>
          <Input
            label={'Break duration'}
            value={'0:05'}
            onChangeText={e => console.log(e)}
          />
        </View>
        <View style={styles.settingItem}>
          <Toggle onValueChange={toggleQuote} value={true} />
        </View>
      </View>
      <TouchableOpacity onPress={saveSettings} style={styles.saveButton}>
        <Button>Save</Button>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
