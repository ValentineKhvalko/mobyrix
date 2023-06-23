import React, { FC } from 'react';

import { LOGO_SRC } from './constants';

export const Header: FC = () => (
  <div className="flex p-2">
    <img src={LOGO_SRC} />
  </div>
);
