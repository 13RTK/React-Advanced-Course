import { useState, useRef, useEffect } from 'react';

import CartDialog from './components/CartDialog';
import NavBar from './components/NavBar';
import ShopList from './components/ShopList';

import { load } from './components/cartListSlice';

import { Toast } from 'primereact/toast';
import { useDispatch } from 'react-redux';
import { useLocalStorage } from 'react-use';

export default function App() {
  const [visible, setVisible] = useState(false);

  const toast = useRef(null);

  const dispatch = useDispatch();
  const [cartList] = useLocalStorage('cart-list', []);

  useEffect(() => {
    dispatch(load(cartList));
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
