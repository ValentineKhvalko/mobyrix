import { atom } from '@reatom/framework';
import { baseCurrencis } from './constants';
import { BaseCurrencis } from './types';

export const baseCurrencisAtom = atom<BaseCurrencis>(baseCurrencis.USD, 'baseCurrencisAtom');
