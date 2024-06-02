/* eslint-disable prettier/prettier */
import {RootState} from '../../store';

export const selectQuoteToggle = (state: RootState) => state.quote.enabled;
