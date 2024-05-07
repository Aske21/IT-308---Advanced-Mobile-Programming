/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import BottomMenu from '../../components/bottom-menu';
import Header from '../../components/header';
import Quote from '../../components/quote';
import Timer from '../../components/timer';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {
  selectWorkTime,
  selectBreakTime,
} from '../../redux/slices/timerSelectors';

export default function Pomodoro() {
  const workDuration = useSelector(selectWorkTime);
  const breakDuration = useSelector(selectBreakTime);

  return (
    <View style={styles.container}>
      <Header />
      <Quote
        author={'Obi-Wan Kenobi'}
        quote={'The Force will be with you, always.'}
      />
      <View style={styles.middleContent}>
        <Timer workDuration={workDuration} breakDuration={breakDuration} />
      </View>
      <View style={styles.bottomButtons}>
        <BottomMenu />
      </View>
    </View>
  );
}
