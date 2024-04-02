/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {formatTime} from '../../utils/formatTime';
import {timerStyles} from './style';

interface TimerProps {
  workDuration: number;
  breakDuration: number;
}

const Timer: React.FC<TimerProps> = ({workDuration, breakDuration}) => {
  const [remainingTime, setRemainingTime] = useState(workDuration);
  const [isWorking, setIsWorking] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const handleTick = () => {
      setRemainingTime(prevTime => prevTime - 1);
    };

    if (isRunning && remainingTime > 0) {
      intervalId = setInterval(handleTick, 1000);
    } else if (remainingTime === 0 && isWorking) {
      setIsWorking(false);
      setIsRunning(false);
      setRemainingTime(breakDuration);
      setIsRunning(true);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, remainingTime, workDuration, breakDuration, isWorking]);

  const timerToggle = () => {
    setIsRunning(!isRunning);
  };
  const timerReset = () => {
    setIsRunning(false);
    setIsWorking(true);
    setRemainingTime(workDuration);
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
      <TouchableOpacity onPress={timerReset}>
        <View style={timerStyles.resetButton}>
          <Text style={timerStyles.resetButtonText}>Reset</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Timer;
