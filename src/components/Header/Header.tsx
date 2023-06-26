'use client';

import React, { FC } from 'react';
import { useAtom } from '@reatom/npm-react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

import { baseCurrencisAtom } from './model';

import { LOGO_SRC, baseCurrencis } from './constants';
import Link from 'next/link';
import { Routes } from '@/constants';

export const Header: FC = () => {
  const pathname = usePathname();
  const [currency, setCurrency] = useAtom(baseCurrencisAtom);

  return (
    <div className="flex p-3 justify-between items-center">
      <div className="flex items-center">
        <div className="flex items-center">
          <img className="pr-2" src={LOGO_SRC} />
          <h1 className="font-medium text-lg">MOBYRIX</h1>
        </div>
        <nav className="ml-20">
          <ul className="flex items-center text-sm uppercase">
            <li>
              <Link
                className={classNames('px-3 py-2 border-b-4 border-transparent transition-all hover:border-amber-100', {
                  ' border-b-amber-500': pathname === Routes.market,
                })}
                href={Routes.market}
              >
                Market
              </Link>
            </li>
            <li>
              <Link
                className={classNames('px-3 py-2 border-b-4 border-transparent transition-all hover:border-amber-100', {
                  'border-b-amber-500': pathname === Routes.trade,
                })}
                href={Routes.trade}
              >
                Trade
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex">
        {Object.values(baseCurrencis).map((value) => (
          <div
            key={value.name}
            className={classNames('px-1 cursor-pointer transition-colors', {
              'text-amber-700': value.name === currency.name,
            })}
            onClick={() => {
              setCurrency(value);
            }}
          >
            {value.name}
          </div>
          // currency.name !== value.name ? <div className='px-1'>{value.name}</div> : undefined
        ))}
      </div>
    </div>
  );
};
