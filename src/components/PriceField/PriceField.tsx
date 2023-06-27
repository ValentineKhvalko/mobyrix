import React, { FC, useEffect, useRef, useState } from 'react';
import { TableCell } from '../Table';
import classNames from 'classnames';

type Props = {
  price: number;
};

let timer: NodeJS.Timeout | null = null;

const PriceField: FC<Props> = ({ price }) => {
  const [difference, setDifference] = useState(0);
  const prevPriceRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (prevPriceRef.current !== undefined) {
      setDifference(prevPriceRef.current - price);
      timer = setTimeout(() => {
        setDifference(0);
      }, 1500);
    }

    prevPriceRef.current = price;

    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, [price]);

  return (
    <TableCell
      className={classNames({
        'text-green-600': difference > 0,
        'text-red-600': difference < 0,
        'font-medium': difference !== 0,
      })}
    >
      {price}
    </TableCell>
  );
};

export default PriceField;
