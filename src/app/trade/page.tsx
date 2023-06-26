'use client';

import ConvertIcon from '../../assets/convert.svg';
import { Modal } from '@/components/Modal';
import { useAtom } from '@reatom/npm-react';
import { CurrencyField } from './components/CurrencyField';
import { useEffect } from 'react';
import { fetchAssetsAction } from '@/model';
import { Asset } from '@/types';

const DEFAULT_ASSETS_NAMES = {
  from: 'BNB',
  to: 'USDT',
};

export default function Trade() {
  const [isOpen, setIsOpen] = useAtom(false);
  const [assets] = useAtom(fetchAssetsAction.dataAtom);
  const [firstAsset, setFirst] = useAtom<Asset | undefined>(undefined);
  const [secondAsset, setSecond] = useAtom<Asset | undefined>(undefined);

  useEffect(() => {
    if (assets) {
      const fromAsset = assets.find((asset) => asset.symbol === DEFAULT_ASSETS_NAMES.from);
      setFirst(fromAsset);

      const toAsset = assets.find((asset) => asset.symbol === DEFAULT_ASSETS_NAMES.to);
      setSecond(toAsset);
    }
  }, [assets]);

  const onSelect = (from: 'first' | 'second') => (value: Asset) => {
    if (from === 'first') {
      setFirst(value);
    } else {
      setSecond(value);
    }

    console.log(value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center flex-grow">
        <CurrencyField title="from" currency={firstAsset} onSelect={onSelect('first')} />
        <div className="flex justify-center items-center w-12 h-12 rounded-full my-4 bg-gray-200">
          <ConvertIcon width={25} height={25} />
        </div>
        <CurrencyField title="to" readOnly currency={secondAsset} onSelect={onSelect('second')} />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      ></Modal>
    </>
  );
}
