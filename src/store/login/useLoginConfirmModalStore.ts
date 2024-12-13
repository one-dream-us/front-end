import { create } from 'zustand';

interface LoginConfirmModalState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isNavigate: boolean;
  setIsNavigate: (isNavigate: boolean) => void;
}

const useLoginConfirmModalState = create<LoginConfirmModalState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  isNavigate: true,
  setIsNavigate: (isNavigate: boolean) => set({ isNavigate }),
}));

export default useLoginConfirmModalState;
