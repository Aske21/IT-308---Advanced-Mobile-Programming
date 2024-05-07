/* eslint-disable prettier/prettier */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  BREAK_TIME_CONSTANTS,
  WORK_TIME_CONSTANTS,
} from '../../../constants/timerConstant';

interface TimerState {
  workTime: number;
  breakTime: number;
}

const initialState: TimerState = {
  workTime: WORK_TIME_CONSTANTS.POMODORO_25_MINUTES,
  breakTime: BREAK_TIME_CONSTANTS.SHORT_BREAK_5_MINUTES,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setWorkTime: (state, action: PayloadAction<number>) => {
      state.workTime = action.payload;
    },
    setBreakTime: (state, action: PayloadAction<number>) => {
      state.breakTime = action.payload;
    },
  },
});

export const {setWorkTime, setBreakTime} = timerSlice.actions;

export default timerSlice.reducer;
