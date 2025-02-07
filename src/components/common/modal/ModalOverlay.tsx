import { ReactNode } from 'react';

export default function ModalOverlay({
  children,
  isOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
}) {
  return (
    <>
      {isOpen && (
        <div className='fixed left-0 top-0 z-[9999] flex h-dvh w-full items-center justify-center bg-black bg-opacity-60'>
          {children}
        </div>
      )}
    </>
  );
}
