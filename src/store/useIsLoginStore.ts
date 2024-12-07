import { create } from 'zustand';

interface LoginState {
  isLogin: boolean;
  setIsLogin: (loginStatus: boolean) => void;
}

export const useLoginStore = create<LoginState>((set) => ({
  isLogin: false,
  setIsLogin: (loginStatus) => set({ isLogin: loginStatus }),
}));
