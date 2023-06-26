import React, { FC, PropsWithChildren } from 'react';

const TableHead: FC<PropsWithChildren> = ({ children }) => <thead>{children}</thead>;

export default TableHead;
