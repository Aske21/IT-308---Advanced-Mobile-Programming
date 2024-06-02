/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect, useRef} from 'react';

const usePomodoro = (workDuration: number, breakDuration: number) => {
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

  const stopTimer = () => setIsRunning(false);
  const startTimer = () => setIsRunning(true);
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
