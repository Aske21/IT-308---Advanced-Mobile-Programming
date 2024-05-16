/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {formatTime} from '../../utils/formatTime';
import {timerStyles} from './style';

interface TimerProps {
  remainingTime: number;
  isWorking: boolean;
  isRunning: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
}

const Timer: React.FC<TimerProps> = ({
  isRunning,
  isWorking,
  remainingTime,
  resetTimer,
  startTimer,
  stopTimer,
}) => {
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
