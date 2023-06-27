'use client';

import { useAtom } from '@reatom/npm-react';
import React from 'react';

import { fetchAssetsAction } from '@/model';
import { Table, TableBody } from '@/components/Table';
import PlayerCurrencyField from '@/components/PlayerCurrencyField/PlayerCurrencyField';

function Profile() {
  const [assets] = useAtom(fetchAssetsAction.dataAtom);

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
