import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

const initialState: { data: Record<string, number> } = {
  data: {},
};

export const profileDataSlice = createSlice({
  name: 'profileData',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Record<string, number>>) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
  },
});

export const { update } = profileDataSlice.actions;

export const selectProfileData = (state: RootState) => state.profileData.data;

export default profileDataSlice.reducer;
