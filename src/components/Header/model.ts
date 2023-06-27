import { atom } from '@reatom/framework';
import { baseCurrencies } from './constants';
import { BaseCurrencies } from './types';

export const baseCurrenciesAtom = atom<BaseCurrencies>(baseCurrencies.USD, 'baseCurrenciesAtom');
