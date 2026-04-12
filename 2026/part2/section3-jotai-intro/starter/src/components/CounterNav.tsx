import { useCounterStore } from '../stores/counter';

function CounterNav() {
  const { counter } = useCounterStore();

  return <p>Counter {counter}</p>;
}

export default CounterNav;
