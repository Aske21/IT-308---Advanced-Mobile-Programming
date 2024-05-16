/* eslint-disable prettier/prettier */
import {useState, useEffect, useRef} from 'react';

const usePomodoro = (workDuration: number, breakDuration: number) => {
  const [remainingTime, setRemainingTime] = useState(workDuration);
  const [isWorking, setIsWorking] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isRunning) {
      setRemainingTime(isWorking ? workDuration : breakDuration);
      return;
    }

    const handleTick = () => {
      setRemainingTime(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          setIsWorking(prevIsWorking => !prevIsWorking);
          return isWorking ? breakDuration : workDuration;
        }
      });
    };

    intervalRef.current = setInterval(handleTick, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, isWorking, workDuration, breakDuration]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setIsWorking(true);
    setRemainingTime(workDuration);
  };

  return {
    remainingTime,
    isWorking,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
  };
};

export default usePomodoro;
