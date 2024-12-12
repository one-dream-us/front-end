import { create } from 'zustand';

interface LoginModalState {
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (isOpen: boolean) => void;
  loginConfirmed: boolean;
  setLoginConfirmed: () => void;
  prevPage: string | null;
  setPrevPage: (prevPage: string) => void;
}

const useLoginModalStore = create<LoginModalState>((set) => ({
  isLoginModalOpen: false,
  loginConfirmed: false,
  prevPage: null,
  setIsLoginModalOpen: (isOpen: boolean) => set({ isLoginModalOpen: isOpen }),
  setLoginConfirmed: () => set({ loginConfirmed: true }),
  setPrevPage: (prevPage) => set({ prevPage }),
}));

export default useLoginModalStore;
