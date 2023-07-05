import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { BaseCurrencies } from './types';
import { baseCurrencies } from './constants';

const initialState = {
  value: baseCurrencies.USD,
};

export const baseCurrenciesSlice = createSlice({
  name: 'baseCurrencies',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<BaseCurrencies>) => {
      state.value = action.payload;
    },
  },
});

export const { change } = baseCurrenciesSlice.actions;

export const selectbaseCurrency = (state: RootState) => state.baseCurrencies.value;

export default baseCurrenciesSlice.reducer;
