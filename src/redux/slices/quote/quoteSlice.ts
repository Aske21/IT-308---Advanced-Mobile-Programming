/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

interface QuoteToggleState {
  enabled: boolean;
}

const initialState: QuoteToggleState = {
  enabled: false,
};

const quoteToggleSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    toggleQuoteFetching: state => {
      state.enabled = !state.enabled;
    },
  },
});

export const {toggleQuoteFetching} = quoteToggleSlice.actions;
export default quoteToggleSlice.reducer;
