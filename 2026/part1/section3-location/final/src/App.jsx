import About from './components/About';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setIsHome((isHome) => !isHome)}>
        Toggle
      </button>
      {isHome ? <Home /> : <About />}
    </>
  );
}
export default App;
