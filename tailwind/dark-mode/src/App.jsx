import { useState } from 'react';

function App() {
  const SUN_ICON = '🔆';
  const MOON_ICON = '🌙';

  const [currentTheme, setCurrentTheme] = useState(SUN_ICON);

  function toggleTheme() {
    setCurrentTheme((preTheme) => {
      if (preTheme === SUN_ICON) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      return preTheme === SUN_ICON ? MOON_ICON : SUN_ICON;
    });
  }

  return (
    <>
      <nav className="bg-slate-200 dark:bg-slate-800 text-7xl text-center dark:text-white">
        <span> Dark Mode With React </span>
        <button onClick={toggleTheme}>{currentTheme}</button>
      </nav>

      <main className="text-5xl text-center bg-white dark:bg-black h-screen dark:text-white">
        Main
      </main>
    </>
  );
}
export default App;
