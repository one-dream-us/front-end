import { create } from 'zustand';

interface PageState {
  page: number;
  resetPage: () => void;
  handleNextPage: (lastPage: number) => void;
  handlePrevPage: () => void;
}

const pageState = create<PageState>((set) => ({
  page: Number(new URLSearchParams(location.search).get('page')) || 1,
  resetPage: () => set({ page: 1 }),
  handleNextPage: (lastPage: number) =>
    set((prev) => ({ page: prev.page === lastPage ? lastPage : prev.page + 1 })),
  handlePrevPage: () => set((prev) => ({ page: prev.page === 1 ? 1 : prev.page - 1 })),
}));

export default pageState;
