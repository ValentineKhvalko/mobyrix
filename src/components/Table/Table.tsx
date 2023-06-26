import React, { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

type TableProps = {
  className?: string;
};

const Table: FC<PropsWithChildren<TableProps>> = ({ className, children }) => (
  <table className={classNames(className)}>{children}</table>
);

export default Table;
