'use client';

import { useAtom } from '@reatom/npm-react';
import { fetchAssetsAction, profileDataAtom } from '@/model';
import { Table, TableBody, TableCell, TableRow } from '@/components/Table';
import { Asset } from '@/types';
import { FC, useRef } from 'react';

type Props = {
  asset: Asset;
};

const ProfieRow: FC<Props> = ({ asset }) => {
  const [profileData, setProfileData] = useAtom(profileDataAtom);
  const [readOnly, setReadOnly] = useAtom(true);
  const [inputValue, setInputValue] = useAtom<number>(profileData?.[asset.symbol] || 0);
  const ref = useRef<HTMLInputElement>(null);

  const changeProfileValue = () => {
    if (readOnly) {
      setReadOnly(false);
      ref.current?.focus();
    } else {
      setProfileData({
        ...profileData,
        [asset.symbol]: inputValue,
      });
      setReadOnly(true);
    }
  };

  return (
    <TableRow className="h-12" key={asset.id}>
      <TableCell className="text-ellipsis overflow-hidden font-extralight text-xs">
        <span className="font-medium text-lg">{asset.symbol}</span> {asset.name}
      </TableCell>
      <TableCell className="w-20 text-ellipsis overflow-hidden font-extralight text-xs">
        Max: {asset.marketCapUsdShort}
      </TableCell>
      <TableCell>
        <input
          className="outline-none text-right w-20"
          ref={ref}
          readOnly={readOnly}
          value={inputValue}
          onChange={(e) => {
            const value = Number(e.target.value);

            if (!isNaN(value)) {
              setInputValue(value > asset.marketCapUsd ? asset.marketCapUsd : value);
            }
          }}
          type="number"
        />
      </TableCell>
      <TableCell align="center">
        <button
          onClick={changeProfileValue}
          className="px-3 py-1 rounded-full bg-slate-500 text-white hover:bg-yellow-400 hover:text-black transition-colors"
        >
          {readOnly ? 'change' : 'save'}
        </button>
      </TableCell>
    </TableRow>
  );
};

export default function Profile() {
  const [assets] = useAtom(fetchAssetsAction.dataAtom);

  return (
    <div className="flex justify-center">
      <div className="w-96 mx-10">
        <Table className="w-full">
          <TableBody>
            {assets?.map((asset) => (
              <ProfieRow asset={asset} key={asset.id} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
