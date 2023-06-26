import React, { FC, PropsWithChildren } from 'react';

export type TableCellProps = {
  component?: 'th' | 'td';
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  width?: number | string;
  colSpan?: number;
  className?: string;
};

const TableCell: FC<PropsWithChildren<TableCellProps>> = ({
  className,
  align,
  component,
  colSpan,
  width,
  children,
}) => {
  const Tag = component || 'td';

  return (
    <Tag
      colSpan={colSpan}
      className={className}
      style={{ width: width && typeof width === 'number' ? `${width}px` : width, textAlign: align || 'inherit' }}
    >
      {children}
    </Tag>
  );
};

export default TableCell;
