import { create } from 'zustand';

interface AdminState {
  showSchedule: boolean;
  setShowSchedule: () => void;
}
const adminState = create<AdminState>((set) => ({
  showSchedule: false,
  setShowSchedule: () =>
    set((prev) => {
      return {
        showSchedule: !prev.showSchedule,
      };
    }),
}));

export default adminState;
