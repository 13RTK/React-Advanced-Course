import { useAtom } from 'jotai';
import { useCounterStore } from '../stores/counter';
import { counterAtom } from '../atoms/counter';

function CounterNav() {
  // const { counter } = useCounterStore();
  const [counter] = useAtom(counterAtom);

  return <p>Counter {counter}</p>;
}

export default CounterNav;
