/* eslint-disable prettier/prettier */
import React from 'react';
import Pomodoro from './screens/pomodoro/Pomodoro.screen';
import {Provider} from 'react-redux';
import store from './redux/store';
// import Settings from './screens/settings/Settings.screen';

export default function App() {
  return (
    <Provider store={store}>
      <Pomodoro />
    </Provider>
  );
}
