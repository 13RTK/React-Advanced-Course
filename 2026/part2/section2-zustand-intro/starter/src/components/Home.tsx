function Home({
  counter,
  decrement,
  increment,
}: {
  counter: number;
  decrement: () => void;
  increment: () => void;
}) {
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
