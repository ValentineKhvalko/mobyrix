'use client';

import React, { useEffect } from 'react';

import { Table, TableBody } from '@/components/Table';
import PlayerCurrencyField from '@/components/PlayerCurrencyField/PlayerCurrencyField';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectAssets } from '@/features/assets/assetsSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { fetchAssets } from '@/features/assets/fetchAssets';

function Profile() {
  const assets = useAppSelector(selectAssets);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (assets) {
      dispatch(fetchAssets());
    }
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-96 mx-10">
        <Table className="w-full">
          <TableBody>
            {assets?.map((asset) => (
              <PlayerCurrencyField asset={asset} key={asset.id} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Profile;
