/* eslint-disable prettier/prettier */
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import PomodoroScreen from '../screens/pomodoro/Pomodoro.screen';
import SettingsScreen from '../screens/settings/Settings.screen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#181825',
        },
        headerTintColor: '#cdd6f4',
        headerTitleAlign: 'center',
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="asceee" component={PomodoroScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
