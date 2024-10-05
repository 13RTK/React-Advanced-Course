import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Home() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      counter: {counter}
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}
export default Home;
