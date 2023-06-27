import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAtom } from '@reatom/npm-react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

import { baseCurrenciesAtom } from './model';
import { LOGO_SRC, RoutesData, baseCurrencies } from './constants';
import { Routes } from '@/constants';
import profileIcon from '../../assets/profile.svg';

function Header() {
  const pathname = usePathname();
  const [currency, setCurrency] = useAtom(baseCurrenciesAtom);

  return (
    <div className="flex p-3 justify-between items-center">
      <div className="flex items-center">
        <div className="flex items-center">
          <img className="pr-2" src={LOGO_SRC} />
          <h1 className="font-medium text-xl">MOBYRIX</h1>
        </div>
        <nav className="ml-20">
          <ul className="flex items-center text-sm uppercase">
            {RoutesData.map((route) => (
              <li>
                <Link
                  className={classNames(
                    'px-3 py-2 border-b-4 border-transparent transition-all font-medium hover:border-yellow-200',
                    {
                      ' border-b-yellow-400': pathname === route.href,
                    }
                  )}
                  href={route.href}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex">
        <div className="flex">
          {Object.values(baseCurrencies).map((value) => (
            <div
              key={value.name}
              className={classNames('px-1 cursor-pointer transition-colors', {
                'text-yellow-400': value.name === currency.name,
              })}
              onClick={() => {
                setCurrency(value);
              }}
            >
              {value.name}
            </div>
          ))}
        </div>
        <Link href={Routes.profile} className="ml-8 flex items-center cursor-pointer text-lg">
          <Image src={profileIcon} width="16" height="16" className="mr-2" alt="profile-icon" />
          Profile
        </Link>
      </div>
    </div>
  );
}

export default Header;
