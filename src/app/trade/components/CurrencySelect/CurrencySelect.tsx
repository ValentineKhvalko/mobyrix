import { FC } from 'react';
import { useAtom } from '@reatom/npm-react';

import { Modal } from '@/components/Modal';
import { fetchAssetsAction } from '@/model';
import { Asset } from '@/types';

type Props = {
  currency?: Asset;
  onSelect: (currency: Asset) => void;
  readonly?: boolean;
};

const CurrencySelect: FC<Props> = ({ currency, onSelect }) => {
  const [isOpen, setIsOpen] = useAtom(false);
  const [assets] = useAtom(fetchAssetsAction.dataAtom);

  const handleSelect = (value: Asset) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={() => {
          setIsOpen(true);
        }}
        className="px-3 py-1 font-medium text-lg rounded-3xl bg-white cursor-pointer hover:text-yellow-400"
      >
        {currency?.symbol}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="flex flex-col h-full">
          <div className="text-center font-medium my-4 text-lg">Select currency</div>
          <div className="flex-grow px-4 mb-4 overflow-y-auto">
            {assets?.map((asset) => (
              <div
                key={asset.symbol}
                onClick={() => {
                  handleSelect(asset);
                }}
                className="text-ellipsis overflow-hidden font-extralight text-xs my-1 cursor-pointer hover:text-yellow-400"
              >
                <span className="font-medium text-lg">{asset.symbol}</span> {asset.name}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CurrencySelect;
