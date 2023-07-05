'use client';

import React, { useEffect } from 'react';
import classNames from 'classnames';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/Table';
import { PriceField } from '@/components/PriceField';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectAssets } from '@/features/assets/assetsSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { fetchAssets } from '@/features/assets/fetchAssets';

let timerId: NodeJS.Timeout | null = null;

function Market() {
  const assets = useAppSelector(selectAssets);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!assets) {
      dispatch(fetchAssets());
    } else {
      timerId = setTimeout(() => {
        dispatch(fetchAssets());
      }, 2500);
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
    };
  }, [assets]);

  return (
    <div className="flex justify-center">
      <div className="content mx-10 flex-grow">
        <Table className="w-full">
          <TableHead>
            <TableRow>
              <TableCell className="w-1/5">Name</TableCell>
              <TableCell className="w-1/5">Price</TableCell>
              <TableCell className="w-1/5" align="center">
                24h changes
              </TableCell>
              <TableCell className="w-1/5" align="center">
                24h volume
              </TableCell>
              <TableCell className="w-1/5" align="center">
                capitalization
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets?.map(({ symbol, name, priceUsd, changePercent24Hr, volumeUsd24Hr, marketCapUsdShort, id }) => (
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
                <TableCell align="center">{marketCapUsdShort}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Market;
