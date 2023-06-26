import { api } from '../api';
import { AssetResponse } from '../types';

export type Response = {
  data: AssetResponse;
  timestamp: number;
};

export const getAssetByIdRequest = (id: string) => api.get({ url: `assets/${id}` }) as Promise<Response>;
