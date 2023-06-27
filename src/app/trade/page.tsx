'use client';

import React from 'react';
import classNames from 'classnames';

import convertIcon from '../../assets/convert.svg';
import loadingIcon from '../../assets/loading.svg';
import CurrencyField from '../../components/CurrencyField';
import { useConvertAssets } from '../../hooks/useConvertAssets';
import Image from 'next/image';

function Trade() {
  const { assets, values, select, change, convert, loading, disabled, swap } = useConvertAssets();

  return (
    <div className="flex flex-col justify-center items-center flex-grow">
      <CurrencyField
        value={values.from}
        title="from:"
        currency={assets.from}
        onSelect={select.from}
        onChange={change}
      />
      <div
        onClick={swap}
        className="flex justify-center items-center w-12 h-12 rounded-full my-4 bg-gray-200 hover:bg-gray-100 cursor-pointer"
      >
        <Image src={convertIcon} width={25} height={25} alt="convert-icon" />
      </div>
      <CurrencyField value={values.to} title="to:" readOnly currency={assets.to} onSelect={select.to} />
      <button
        onClick={convert}
        className="relative mt-7 w-96 p-3 bg-yellow-400 disabled:bg-yellow-200 rounded-lg"
        disabled={disabled}
      >
        {loading && (
          <div className="absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-1/2">
            <Image src={loadingIcon} width={24} height={24} alt="loading-icon" />
          </div>
        )}
        <span className={classNames('font-medium', { invisible: loading })}>
          {values.from && values.from > 0 ? 'Convert' : 'Enter an amount'}
        </span>
      </button>
    </div>
  );
}

export default Trade;
