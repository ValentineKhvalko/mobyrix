import { useRef } from 'react';
// import { useAtom } from '@reatom/npm-react';

import { CurrencySelect } from '../CurrencySelect';
import { Asset } from '@/types';
// import { profileDataAtom } from '@/model';

type Props = {
  title: string;
  value?: number;
  currency?: Asset;
  onSelect: (currency: Asset) => void;
  onChange?: (value: string) => void;
  readOnly?: boolean;
};

function CurrencyField({ title, value, currency, readOnly, onSelect, onChange }: Props) {
  const ref = useRef(null);
  // const [profileData] = useAtom(profileDataAtom);

  return (
    <>
      <div className="p-4 w-96 rounded-lg bg-gray-200">
        <div className="flex justify-between mb-4">
          {title}
          <div>
            {/* <div>Balance: {(currency && profileData[currency.symbol]) || 0}</div> */}
            <div>
              Max: <span className="text-xs text-gray-500">{currency ? currency.marketCapUsdShort : 0}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <input
            ref={ref}
            type="number"
            readOnly={readOnly}
            className="font-medium text-xl bg-transparent outline-none appearance-none flex-grow mr-2"
            placeholder="0.00"
            onChange={onChange ? (e) => onChange(e.target.value) : undefined}
            value={value ? String(value) : 0}
          />
          <CurrencySelect currency={currency} onSelect={onSelect} />
        </div>
      </div>
    </>
  );
}

export default CurrencyField;
