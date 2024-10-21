import { useState, useRef, useEffect } from 'react';

import CartDialog from './components/CartDialog';
import NavBar from './components/NavBar';
import ShopList from './components/ShopList';

import { Toast } from 'primereact/toast';

import { useLocalStorage } from 'react-use';
import { useCartList } from './components/useCartList';

export default function App() {
  const [visible, setVisible] = useState(false);

  const toast = useRef(null);

  const { loadFromLocalStorage } = useCartList();
  const [cartList] = useLocalStorage('cart-list', []);

  useEffect(() => {
    loadFromLocalStorage(cartList);
  }, []);

  return (
    <>
      <NavBar setVisible={setVisible} />
      <CartDialog visible={visible} setVisible={setVisible} />
      <ShopList toast={toast} />

      <Toast ref={toast} />
    </>
  );
}
