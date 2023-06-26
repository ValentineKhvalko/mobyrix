export type Asset = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string | number;
  volumeUsd24Hr: string | number;
  priceUsd: number;
  changePercent24Hr: number;
  vwap24Hr: string;
  up?: boolean;
  down?: boolean;
};
