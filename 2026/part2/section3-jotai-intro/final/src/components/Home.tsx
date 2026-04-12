import { useAtom } from 'jotai';
import { useCounterStore } from '../stores/counter';
import { counterAtom } from '../atoms/counter';

function Home() {
  // const { counter, increment, decrement } = useCounterStore();
  const [counter, setCounter] = useAtom(counterAtom);

  function increment() {
    setCounter((counter) => counter + 1);
  }
  function decrement() {
    setCounter((counter) => counter - 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <button onClick={decrement}>-</button>
      counter: {counter}
      <button onClick={increment}>+</button>
    </>
  );
}
export default Home;
