/* eslint-disable prettier/prettier */
import {RootState} from '../store';

export const selectWorkTime = (state: RootState) => state.timer.workTime;
export const selectBreakTime = (state: RootState) => state.timer.breakTime;
