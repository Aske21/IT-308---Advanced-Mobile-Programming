/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useRef} from 'react';
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTick = () => {
      setRemainingTime(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          setIsWorking(prevIsWorking => {
            if (prevIsWorking) {
              setIsWorking(false);
              setRemainingTime(breakDuration);
            } else {
              setIsWorking(true);
              setRemainingTime(workDuration);
            }
            return prevIsWorking;
          });
          return prevTime;
        }
      });
    };

    if (isRunning) {
      intervalRef.current = setInterval(handleTick, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, workDuration, breakDuration]);

  useEffect(() => {
    if (!isRunning) {
      setIsWorking(true);
      setRemainingTime(workDuration);
    }
  }, [workDuration, breakDuration]);

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
