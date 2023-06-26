import React, { FC, PropsWithChildren } from 'react';

import CrossIcon from '../../assets/cross.svg';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: FC<PropsWithChildren<Props>> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/30" onClick={onClose}>
      <div className="w-96 h-96 bg-white relative rounded-lg" onClick={(e) => e.stopPropagation()}>
        <div className="absolute top-1 right-1 cursor-pointer" onClick={onClose}>
          <CrossIcon width={30} height={30} className="fill-slate-500 hover:fill-slate-700" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
