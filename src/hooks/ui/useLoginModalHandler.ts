import useLoginModalStore from '@/store/useLoginModalStore';
import { useState } from 'react';

const useLoginModalHandler = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { isLoginModalOpen, setIsLoginModalOpen } = useLoginModalStore();
  const closeModal = () => setIsLoginModalOpen(false);
  return {
    isChecked,
    setIsChecked,
    isLoginModalOpen,
    closeModal,
  };
};

export default useLoginModalHandler;
