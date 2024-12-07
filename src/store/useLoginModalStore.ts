import { create } from 'zustand';

interface LoginModalState {
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (isOpen: boolean) => void;
  loginConfirmed: boolean;
  setLoginConfirmed: () => void;
}

const useLoginModalStore = create<LoginModalState>((set) => ({
  isLoginModalOpen: false,
  loginConfirmed: false,
  setIsLoginModalOpen: (isOpen: boolean) => set({ isLoginModalOpen: isOpen }),
  setLoginConfirmed: () => set({ loginConfirmed: true }),
}));

export default useLoginModalStore;
