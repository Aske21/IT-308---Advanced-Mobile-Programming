/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {formatTime} from '../../utils/formatTime';
import {timerStyles} from './style';
import usePomodoro from '../../hooks/usePomodoro';

interface TimerProps {
  workDuration: number;
  breakDuration: number;
}

const Timer: React.FC<TimerProps> = ({workDuration, breakDuration}) => {
  const {
    remainingTime,
    isWorking,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
  } = usePomodoro(workDuration, breakDuration);

  const timerToggle = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  return (
    <View style={timerStyles.container}>
      <View style={timerStyles.textContainer}>
        <Text style={timerStyles.timerText}>
          {isWorking ? 'Focus' : 'Break'}
        </Text>
      </View>
      <TouchableOpacity onPress={timerToggle}>
        <View style={timerStyles.timerContainer}>
          <Text style={timerStyles.remainingTimeText}>
            {formatTime(remainingTime)}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={resetTimer}>
        <View style={timerStyles.resetButton}>
          <Text style={timerStyles.resetButtonText}>Reset</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Timer;
