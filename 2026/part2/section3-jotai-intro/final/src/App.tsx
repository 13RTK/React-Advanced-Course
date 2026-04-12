import { useState } from 'react';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Order from './components/Order';
import { DevTools } from 'jotai-devtools';
import 'jotai-devtools/styles.css';

function App() {
  const [currentComponent, setCurrentComponent] = useState('Home');

  return (
    <>
      <NavBar setCurrentComponent={setCurrentComponent} />
      <main className={styles.main}>
        {currentComponent === 'Home' ? <Home /> : <Order />}
      </main>

      <DevTools />
    </>
  );
}
export default App;
