import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';

function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <>
      <button onClick={() => setIsHome((isHome) => !isHome)}>Toggle</button>
      {isHome ? <Home /> : <About />}
    </>
  );
}
export default App;
