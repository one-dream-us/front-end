import { create } from 'zustand';

interface PageState {
  page: number;
  setPage: (page: number) => void;
  handleNextPage: (lastPage: number) => void;
  handlePrevPage: () => void;
}

const pageState = create<PageState>((set) => ({
  page: 0,
  setPage: (page: number) => set({ page }),
  handleNextPage: (lastPage: number) =>
    set((prev) => ({ page: prev.page === lastPage ? lastPage : prev.page + 1 })),
  handlePrevPage: () => set((prev) => ({ page: prev.page === 0 ? 0 : prev.page - 1 })),
}));

export default pageState;
