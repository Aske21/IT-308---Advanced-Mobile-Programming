import 'react-native-gesture-handler';
import React from 'react';
import App from './src/index';
import {NavigationContainer} from '@react-navigation/native';

function AppContainer(): React.JSX.Element {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

export default AppContainer;
