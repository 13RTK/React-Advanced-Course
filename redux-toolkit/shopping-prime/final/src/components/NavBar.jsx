import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';

import { useToggleTheme } from './useToggleTheme';
import { useCartList } from './useCartList';

export default function NavBar({ setVisible }) {
  const { cartListStore } = useCartList();
  const cartListCount = cartListStore.length;

  const { currentTheme, toggleTheme } = useToggleTheme();

  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
    </a>
  );

  const items = [
    {
      label: 'Cart',
      icon: 'pi pi-shopping-cart',
      badge: cartListCount,
      template: itemRenderer,
      command: () => {
        setVisible(true);
      },
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
