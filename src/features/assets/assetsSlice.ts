import { Asset } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAssets } from './fetchAssets';
import { formatAssets } from '@/utils';
import { RootState } from '@/store';

type AssetsState = {
  status: 'loading' | 'idle';
  error: string | null;
  data: Asset[];
};

const initialState: AssetsState = {
  data: [],
  error: null,
  status: 'idle',
};

const assetsSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAssets.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(fetchAssets.fulfilled, (state, { payload }) => {
      state.data = formatAssets(payload.data);
      state.status = 'idle';
    });

    builder.addCase(fetchAssets.rejected, (state, { payload }) => {
      if (payload) {
        state.error = 'Error';
      }

      state.status = 'idle';
    });
  },
});

export const selectAssets = (state: RootState) => state.assets.data;
export const selectAssetsStatus = (state: RootState) => state.assets.status;

export default assetsSlice.reducer;
