import { API_KEY } from '@/constants';
import ky, { Options } from 'ky-universal';

type ApiProps = { url: string; options?: Options };

const createKyInstance = () =>
  ky.create({
    prefixUrl: 'https://api.coincap.io/v2/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    timeout: false,
  });

const createApi = () => {
  const instance = createKyInstance();

  return {
    get: ({ url, options }: ApiProps) => instance.get(url, options).json(),
  };
};

export const api = createApi();
