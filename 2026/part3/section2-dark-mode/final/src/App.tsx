import { useState } from 'react';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  function toggleTheme() {
    if (currentTheme === 'light') {
      document.documentElement.classList.add('dark');
      setCurrentTheme('dark');
      return;
    }

    document.documentElement.classList.remove('dark');
    setCurrentTheme('light');
  }

  return (
    <div className="text-black dark:text-white text-center dark:bg-black h-screen">
      <nav className="text-3xl dark:bg-slate-700 bg-slate-200 font-serif font-bold">
        Hello world!
        <button type="button" onClick={toggleTheme}>
          {currentTheme === 'light' ? '☀️' : '🌙'}
        </button>
      </nav>

      <main>Main Content</main>
    </div>
  );
}

export default App;
