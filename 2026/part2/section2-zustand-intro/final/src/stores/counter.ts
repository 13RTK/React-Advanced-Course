import { create } from 'zustand';

type CounterStore = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore>()((set) => ({
  counter: 1,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
}));
