import { useState } from 'react';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Order from './components/Order';

function App() {
  const [counter, setCounter] = useState(0);
  const [currentComponent, setCurrentComponent] = useState('Home');

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <>
      <NavBar counter={counter} setCurrentComponent={setCurrentComponent} />
      <main className={styles.main}>
        {currentComponent === 'Home' ? (
          <Home counter={counter} increment={increment} decrement={decrement} />
        ) : (
          <Order />
        )}
      </main>
    </>
  );
}
export default App;
