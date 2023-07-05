import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAssetsRequest } from '@/api/requests/assets';

export const fetchAssets = createAsyncThunk('assets/fetch', getAssetsRequest);
