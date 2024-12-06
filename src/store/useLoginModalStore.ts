import { create } from 'zustand';

interface LoginModalState {
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (isOpen: boolean) => void;
}

const useLoginModalStore = create<LoginModalState>((set) => ({
  isLoginModalOpen: false,
  setIsLoginModalOpen: (isOpen: boolean) => set({ isLoginModalOpen: isOpen }),
}));

export default useLoginModalStore;
