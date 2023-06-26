import { api } from '../api';
import { Rate } from '../types';

export type Response = {
  data: Rate[];
};

export const getRatesRequest = () => api.get({ url: 'rates' }) as Promise<Response>;
