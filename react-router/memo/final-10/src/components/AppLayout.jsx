import { Outlet } from 'react-router-dom';

import BottomNavBar from './BottomNavBar';
import NavBar from './NavBar';

function AppLayout() {
  return (
    <>
      <NavBar />
      <div
        style={{
          marginBottom: '56px',
          marginTop: '70px',
          zIndex: '0',
          textAlign: 'center',
        }}
      >
        <Outlet />
      </div>
      <BottomNavBar />
    </>
  );
}
export default AppLayout;
