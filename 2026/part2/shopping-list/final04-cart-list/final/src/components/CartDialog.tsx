import { useAtom } from 'jotai';
import { Dialog } from 'primereact/dialog';
import { visibleAtom } from '../atoms/visible';
import CartList from './CartList';

function CartDialog() {
  const [visible, setVisible] = useAtom(visibleAtom);

  return (
    <Dialog
      visible={visible}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      style={{ width: '50vw' }}
      breakpoints={{ '960px': '75vw', '641px': '100vw' }}
    >
      <CartList />
    </Dialog>
  );
}

export default CartDialog;
