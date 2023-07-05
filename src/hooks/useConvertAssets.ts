import { useEffect, useState } from 'react';

import { Asset } from '@/types';
import { useAppSelector } from './useAppSelector';
import { selectProfileData, update } from '@/features/profileData/profileDataSlice';
import { useAppDispatch } from './useAppDispatch';
import { selectAssets, selectAssetsStatus } from '@/features/assets/assetsSlice';
import { fetchAssets } from '@/features/assets/fetchAssets';

const DEFAULT_ASSETS_NAMES = {
  from: 'BTC',
  to: 'USDT',
};

export function useConvertAssets() {
  const assetsData = useAppSelector(selectAssets);
  const status = useAppSelector(selectAssetsStatus);
  const profileData = useAppSelector(selectProfileData);
  const dispatch = useAppDispatch();

  const [assets, setAssets] = useState<{ from?: Asset; to?: Asset }>({ from: undefined, to: undefined });
  const [fromValue, setFromValue] = useState<number | undefined>(undefined);
  const [toValue, setToValue] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (assets) {
      dispatch(fetchAssets());
    }
  }, []);

  useEffect(() => {
    if (assetsData) {
      setAssets({
        from: assetsData.find((asset) => asset.symbol === DEFAULT_ASSETS_NAMES.from),
        to: assetsData.find((asset) => asset.symbol === DEFAULT_ASSETS_NAMES.to),
      });
    }
  }, [assetsData]);

  const select = (from: 'from' | 'to') => (asset: Asset) => {
    if (fromValue) {
      if (from === 'from') {
        setToValue(Number(((fromValue * asset.priceUsd) / assets.to!.priceUsd).toFixed(6)));
      } else {
        setToValue(Number(((fromValue * assets.from!.priceUsd) / asset.priceUsd).toFixed(6)));
      }
    }

    setAssets({
      ...assets,
      [from]: asset,
    });
  };

  const onChange = (value: string) => {
    const count = Number(value);

    if (!isNaN(count)) {
      if (assets.from && assets.to) {
        setToValue(Number(((count * assets.from.priceUsd) / assets.to.priceUsd).toFixed(6)));
      }

      setFromValue(count);
    }
  };

  const convert = () => {
    dispatch(
      update({
        [assets.from!.symbol]: Number((profileData[assets.from!.symbol] - fromValue!).toFixed(3)),
        [assets.to!.symbol]: Number(((profileData[assets.to!.symbol] || 0) + toValue!).toFixed(3)),
      })
    );
    setFromValue(undefined);
    setToValue(undefined);
  };

  const swap = () => {
    if (assets.from && assets.to && fromValue) {
      setToValue(Number(((fromValue * assets.to.priceUsd) / assets.from.priceUsd).toFixed(6)));
    }

    setAssets({
      from: assets.to,
      to: assets.from,
    });
  };

  return {
    assets,
    swap,
    values: { from: fromValue, to: toValue },
    select: { from: select('from'), to: select('to') },
    change: onChange,
    convert,
    disabled:
      !assets.from ||
      !assets.to ||
      !fromValue ||
      fromValue > assets.from.marketCapUsd ||
      (profileData[assets.from.symbol] || 0) < Number(fromValue) ||
      assets.from.name === assets.to.name ||
      (!!toValue && toValue > assets.to.marketCapUsd),
    loading: status === 'loading',
  };
}
