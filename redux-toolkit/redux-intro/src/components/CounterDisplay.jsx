import { useSelector } from 'react-redux';

function CounterDisplay() {
  const counter = useSelector((state) => state.counter.value);

  return <p>Counter {counter}</p>;
}

export default CounterDisplay;
