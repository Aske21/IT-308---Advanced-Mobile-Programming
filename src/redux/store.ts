/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import timerReducer from './slices/timer/timerSlice';
import quoteReducer from './slices/quote/quoteSlice';

const store = configureStore({
  reducer: {
    timer: timerReducer,
    quote: quoteReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
