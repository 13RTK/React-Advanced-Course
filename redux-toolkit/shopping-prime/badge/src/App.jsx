import { useState, useRef } from 'react';

import CartDialog from './components/CartDialog';
import NavBar from './components/NavBar';
import ShopList from './components/ShopList';

import { Toast } from 'primereact/toast';

export default function App() {
  const [visible, setVisible] = useState(false);

  const toast = useRef(null);

  return (
    <>
      <NavBar setVisible={setVisible} />
      <CartDialog visible={visible} setVisible={setVisible} />
      <ShopList toast={toast} />

      <Toast ref={toast} />
    </>
  );
}
