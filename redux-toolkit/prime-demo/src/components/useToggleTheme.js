import { useEffect, useState } from 'react';

export function useToggleTheme() {
  const [currentTheme, setCurrentTheme] = useState('light');

  function toggleTheme() {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `/themes/lara-${currentTheme}-cyan/theme.css`;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [currentTheme]);

  return { currentTheme, toggleTheme };
}
