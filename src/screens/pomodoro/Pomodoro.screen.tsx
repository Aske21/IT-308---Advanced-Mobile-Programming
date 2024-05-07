/* eslint-disable prettier/prettier */
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import BottomMenu from '../../components/bottom-menu';
import Quote from '../../components/quote';
import Timer from '../../components/timer';
import {RootStackParamList} from '../../constants/routeConstant';
import {
  selectBreakTime,
  selectWorkTime,
} from '../../redux/slices/timerSelectors';
import {styles} from './style';

type PomodoroNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Pomodoro'
>;

export default function Pomodoro({
  navigation,
}: {
  navigation: PomodoroNavigationProp;
}) {
  const workDuration = useSelector(selectWorkTime);
  const breakDuration = useSelector(selectBreakTime);

  return (
    <View style={styles.container}>
      <Quote
        author={'Obi-Wan Kenobi'}
        quote={'The Force will be with you, always.'}
      />
      <View style={styles.middleContent}>
        <Timer workDuration={workDuration} breakDuration={breakDuration} />
      </View>
      <View style={styles.bottomButtons}>
        <BottomMenu onPress={() => navigation.navigate('Settings')} />
      </View>
    </View>
  );
}
