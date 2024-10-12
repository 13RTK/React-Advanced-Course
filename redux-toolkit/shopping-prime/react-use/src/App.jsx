import { useState, useRef } from 'react';

import CartDialog from './components/CartDialog';
import NavBar from './components/NavBar';
import ShopList from './components/ShopList';

import { Toast } from 'primereact/toast';

export default function App() {
  const [visible, setVisible] = useState(false);

  const toast = useRef(null);

  const show = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Success',
      detail: 'Successfully added',
      life: 1000,
    });
  };

  return (
    <>
      <NavBar setVisible={setVisible} />
      <CartDialog visible={visible} setVisible={setVisible} />
      <ShopList show={show} />

      <Toast ref={toast} />
    </>
  );
}
