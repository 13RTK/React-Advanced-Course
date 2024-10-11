import { useState } from 'react';

import CartDialog from './components/CartDialog';
import NavBar from './components/NavBar';
import ShopList from './components/ShopList';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <NavBar setVisible={setVisible} />
      <CartDialog visible={visible} setVisible={setVisible} />
      <ShopList />
    </>
  );
}
