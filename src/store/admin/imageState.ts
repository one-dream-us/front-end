import { create } from 'zustand';

interface ImgState {
  img: File | undefined;
  setImg: (img: File) => void;
}

const imgState = create<ImgState>((set) => ({
  img: undefined,
  setImg: (img: File) => set({ img }),
}));
export default imgState;
