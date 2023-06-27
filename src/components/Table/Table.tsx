import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

type TableProps = {
  className?: string;
};

function Table({ className, children }: PropsWithChildren<TableProps>) {
  return <table className={classNames(className)}>{children}</table>;
}

export default Table;
