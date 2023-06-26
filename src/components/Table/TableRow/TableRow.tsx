import React, { FC, PropsWithChildren } from 'react';

export type TableRowProps = {
  className?: string;
};

const TableRow: FC<PropsWithChildren<TableRowProps>> = ({ children, className }) => {
  return <tr className={className}>{children}</tr>;
};

export default TableRow;
