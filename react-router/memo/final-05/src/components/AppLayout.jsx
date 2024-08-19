import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import BottomNavBar from './BottomNavBar';
import NavBar from './NavBar';

function AppLayout() {
  return (
    <>
      <NavBar />
      <div style={{ marginBottom: '56px', marginTop: '70px', zIndex: '0' }}>
        <Outlet />
      </div>
      <BottomNavBar />
      <Toaster />
    </>
  );
}
export default AppLayout;
