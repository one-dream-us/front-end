import { create } from 'zustand';

interface AdminState {
  showSchedule: boolean;
  setShowSchedule: () => void;
  date: string;
  setDate: (date: string) => void;
  scheduled: boolean | null;
  setScheduled: (scheduled: boolean) => void;
}
const adminState = create<AdminState>((set) => ({
  showSchedule: false,
  setShowSchedule: () =>
    set((prev) => {
      return {
        showSchedule: !prev.showSchedule,
      };
    }),
  date: '',
  setDate: (date: string) => set({ date }),
  scheduled: null,
  setScheduled: (scheduled: boolean) => set({ scheduled }),
}));

export default adminState;
