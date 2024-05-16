/* eslint-disable prettier/prettier */
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import BottomMenu from '../../components/bottom-menu';
import Quote from '../../components/quote';
import Timer from '../../components/timer';
import {RootStackParamList} from '../../constants/routeConstant';
import {
  selectBreakTime,
  selectWorkTime,
} from '../../redux/slices/timer/timerSelectors';
import {styles} from './style';
import useFetchQuote from '../../hooks/useFetchQuote';
import {selectQuoteToggle} from '../../redux/slices/quote/quoteSelectors';
import usePomodoro from '../../hooks/usePomodoro';

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
  const {
    isRunning,
    isWorking,
    remainingTime,
    resetTimer,
    startTimer,
    stopTimer,
  } = usePomodoro(workDuration, breakDuration);
  const quoteToggle = useSelector(selectQuoteToggle);
  const quoteEnabled = useMemo(
    () => isRunning && quoteToggle,
    [isRunning, quoteToggle],
  );
  const {data: quotes} = useFetchQuote(isRunning);

  return (
    <View style={styles.container}>
      {quoteEnabled ? <Quote quotes={quotes} /> : null}
      <View style={styles.middleContent}>
        <Timer
          isRunning={isRunning}
          isWorking={isWorking}
          remainingTime={remainingTime}
          resetTimer={resetTimer}
          startTimer={startTimer}
          stopTimer={stopTimer}
        />
      </View>
      <View style={styles.bottomButtons}>
        <BottomMenu onPress={() => navigation.navigate('Settings')} />
      </View>
    </View>
  );
}
