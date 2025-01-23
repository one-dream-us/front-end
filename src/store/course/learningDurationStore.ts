import { LEARNING_DURATION_SECONDS_KEY } from '@/constants/constants';
import { create } from 'zustand';

interface LearingDurationStore {
  start: number;
  end: number;
  setTimeStamp: (stamp: 'start' | 'end') => void;
}

const learingDurationStore = create<LearingDurationStore>((set) => ({
  start: 0,
  end: 0,
  setTimeStamp: (stamp: 'start' | 'end') =>
    set((state) => {
      if (stamp === 'start') {
        localStorage.removeItem(LEARNING_DURATION_SECONDS_KEY);
        state = { ...state, start: 0 };
        state.start = Date.now();
      } else if (stamp === 'end') {
        state = { ...state, end: 0 };
        state.end = Date.now();
        localStorage.setItem(
          LEARNING_DURATION_SECONDS_KEY,
          Math.floor((state.end - state.start) / 1000) + '',
        );
      }

      return state;
    }),
}));

export default learingDurationStore;
