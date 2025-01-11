import { create } from 'zustand';

interface CourseIndexStore {
  index: number;
  setIndex: (index: number) => void;
}
const courseIndexState = create<CourseIndexStore>((set) => ({
  index: 0,
  setIndex: (index: number) => set({ index }),
}));

export default courseIndexState;
