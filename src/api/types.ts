export type AssetResponse = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
};

export type Rate = {
  id: string;
  symbol: string;
  currencySymbol: string;
  type: string;
  rateUsd: string;
};
