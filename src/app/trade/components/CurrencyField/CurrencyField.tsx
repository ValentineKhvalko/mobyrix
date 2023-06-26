import { FC } from 'react';

import { CurrencySelect } from '../CurrencySelect';
import { Asset } from '@/types';

type Props = {
  title: string;
  currency?: Asset;
  onSelect: (currency: Asset) => void;
  readOnly?: boolean;
};

const CurrencyField: FC<Props> = ({ title, currency, readOnly, onSelect }) => {
  return (
    <>
      <div className="p-4 w-96 rounded-lg bg-gray-200">
        <div className="flex justify-between">
          {title}
          <div>balance:</div>
        </div>
        <div className="flex justify-between">
          <input
            type="number"
            readOnly={readOnly}
            className="bg-transparent outline-none appearance-none"
            placeholder="0.00"
          />
          <CurrencySelect currency={currency} onSelect={onSelect} />
        </div>
      </div>
    </>
  );
};

export default CurrencyField;
