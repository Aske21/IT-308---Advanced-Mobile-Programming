/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import timerReducer from './slices/timerSlice';

const store = configureStore({
  reducer: {
    timer: timerReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
