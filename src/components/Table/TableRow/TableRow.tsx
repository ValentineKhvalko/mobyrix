import React, { PropsWithChildren } from 'react';

export type TableRowProps = {
  className?: string;
};

function TableRow({ children, className }: PropsWithChildren<TableRowProps>) {
  return <tr className={className}>{children}</tr>;
}

export default TableRow;
