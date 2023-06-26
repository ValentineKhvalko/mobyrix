import { api } from '../api';
import { AssetResponse } from '../types';

export type Response = {
  data: AssetResponse[];
};

export const getAssetsRequest = () => api.get({ url: 'assets' }) as Promise<Response>;
