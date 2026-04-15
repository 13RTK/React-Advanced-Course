import { Toaster } from 'sonner';
import CartDialog from './components/CartDialog';
import Navbar from './components/Navbar';
import ShopList from './components/ShopList';

function App() {
  return (
    <>
      <Navbar />
      <ShopList />
      <CartDialog />
      <Toaster position="top-center" richColors />
    </>
  );
}

export default App;
