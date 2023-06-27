import React, { PropsWithChildren } from 'react';

function TableHead({ children }: PropsWithChildren) {
  return <thead>{children}</thead>;
}

export default TableHead;
