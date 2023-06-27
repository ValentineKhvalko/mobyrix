import React, { PropsWithChildren } from 'react';

type TableCellProps = {
  component?: 'th' | 'td';
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  colSpan?: number;
  className?: string;
};

function TableCell({ className, align, component, colSpan, children }: PropsWithChildren<TableCellProps>) {
  const Tag = component || 'td';

  return (
    <Tag colSpan={colSpan} className={className} style={{ textAlign: align || 'inherit' }}>
      {children}
    </Tag>
  );
}

export default TableCell;
