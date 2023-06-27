import { AssetResponse } from './api/types';
import { Asset } from './types';

export const shortenLongNumber = (value: number) => {
  if (value < 100_000) {
    return value;
  }

  const format = (divider: number, ending: string) => (value / divider).toFixed(2).replace(/\.0$/, '') + ending;

  if (value < 1_000_000) {
    return format(1000, 'K');
  }

  if (value < 1_000_000_000) {
    return format(1_000_000, 'M');
  }

  return format(1_000_000_000, 'B');
};

export const formatAssets = (assets: AssetResponse[]): Asset[] => {
  return assets.map((value) => ({
    ...value,
    marketCapUsd: Number(value.marketCapUsd),
    priceUsd: Number(Number(value.priceUsd).toFixed(2)),
    changePercent24Hr: Number(Number(value.changePercent24Hr).toFixed(2)),
    volumeUsd24Hr: shortenLongNumber(Number(value.volumeUsd24Hr)),
    marketCapUsdShort: shortenLongNumber(Number(value.marketCapUsd)),
  }));
};
