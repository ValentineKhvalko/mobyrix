import { Routes } from '@/constants';
import { BaseCurrencies, BaseCurrenciesName } from './types';

export const LOGO_SRC =
  'data:image/png;base64,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';

export const baseCurrencies: Record<BaseCurrenciesName, BaseCurrencies> = {
  USD: {
    name: 'USD',
  },
  EUR: {
    name: 'EUR',
  },
  GBP: {
    name: 'GBP',
  },
  JPY: {
    name: 'JPY',
  },
};

export const RoutesData = [
  {
    name: 'market',
    href: Routes.market,
  },
  {
    name: 'trade',
    href: Routes.trade,
  },
];
