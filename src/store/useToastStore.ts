import { create } from 'zustand';

interface ToastState {
  message: string;
  type: string;
  isVisible: boolean;
  showToast: (message: string, type: string) => void;
  hideToast: () => void;
}

const useToastStore = create<ToastState>((set) => ({
  message: '',
  type: '',
  isVisible: false,
  showToast: (message, type) => set({ message, type, isVisible: true }),
  hideToast: () => set({ isVisible: false }),
}));

export default useToastStore;
