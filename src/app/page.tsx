'use client';

import { useAction, useAtom } from '@reatom/npm-react';
import classNames from 'classnames';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/Table';
import { fetchAssetsAction, loopedFetchAssetsAction } from '@/model';
import { PriceField } from '@/components/PriceField';
import { useEffect } from 'react';

export default function Market() {
  const [assets] = useAtom(fetchAssetsAction.dataAtom);
  const loopedFetchAssets = useAction(loopedFetchAssetsAction);

  useEffect(() => {
    loopedFetchAssets();
  }, []);

  return (
    <div>
      <div className="mx-10">
        <Table className="w-full">
          <TableHead>
            <TableRow>
              <TableCell className="w-1/5">Name</TableCell>
              <TableCell className="w-1/5">Price</TableCell>
              <TableCell className="w-2/12" align="center">
                24h changes
              </TableCell>
              <TableCell className="w-2/12" align="center">
                24h volume
              </TableCell>
              <TableCell className="w-1/4" align="center">
                capitalization
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {assets?.map(({ symbol, name, priceUsd, changePercent24Hr, volumeUsd24Hr, marketCapUsd, id }) => (
              <TableRow className="h-11" key={id}>
                <TableCell className="text-ellipsis overflow-hidden font-extralight text-xs">
                  <span className="font-medium text-lg">{symbol}</span> {name}
                </TableCell>
                <PriceField price={priceUsd} />
                <TableCell
                  align="center"
                  className={classNames(
                    'font-medium',
                    'text-sm',
                    { 'text-green-600': changePercent24Hr > 0 },
                    { 'text-red-600': changePercent24Hr < 0 }
                  )}
                >
                  {changePercent24Hr}%
                </TableCell>
                <TableCell align="center">{volumeUsd24Hr}</TableCell>
                <TableCell align="center">{marketCapUsd}</TableCell>
                <TableCell width={'10%'} align="right">
                  Trade
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
