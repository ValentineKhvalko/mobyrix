import React, { PropsWithChildren } from 'react';
import Image from 'next/image';

import crossIcon from '../../assets/cross.svg';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function Modal({ isOpen, onClose, children }: PropsWithChildren<Props>) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/30 z-50"
      onClick={onClose}
    >
      <div className="w-96 h-96 bg-white relative rounded-lg" onClick={(e) => e.stopPropagation()}>
        <div className="absolute top-1 right-1 cursor-pointer" onClick={onClose}>
          <Image src={crossIcon} width={25} height={25} className="hover:fill-yellow-400" alt="cross-icon" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
