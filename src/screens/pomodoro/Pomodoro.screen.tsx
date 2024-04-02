/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import BottomMenu from '../../components/bottom-menu';
import Header from '../../components/header';
import Quote from '../../components/quote';
import Timer from '../../components/timer';
import {styles} from './style';

export default function Pomodoro() {
  return (
    <View style={styles.container}>
      <Header />
      <Quote
        author={'Obi-Wan Kenobi'}
        quote={'The Force will be with you, always.'}
      />
      <View style={styles.middleContent}>
        <Timer workDuration={5} breakDuration={5} />
      </View>
      <View style={styles.bottomButtons}>
        <BottomMenu />
      </View>
    </View>
  );
}
