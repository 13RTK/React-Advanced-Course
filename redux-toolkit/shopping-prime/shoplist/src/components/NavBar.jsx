import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';

export default function NavBar() {
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

  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );
  const items = [
    {
      label: 'Cart',
      icon: 'pi pi-shopping-cart',
      badge: 3,
      template: itemRenderer,
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
      />
      <Button
        icon={`pi ${currentTheme === 'light' ? 'pi-sun' : 'pi-moon'}`}
        style={{ marginLeft: '0.5rem' }}
        onClick={toggleTheme}
      />
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
