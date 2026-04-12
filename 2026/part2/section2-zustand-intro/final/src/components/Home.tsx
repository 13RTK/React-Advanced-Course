import { useCounterStore } from '../stores/counter';

function Home() {
  const { counter, increment, decrement } = useCounterStore();

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
