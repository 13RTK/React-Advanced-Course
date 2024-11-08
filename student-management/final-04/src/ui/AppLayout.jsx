import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';

function AppLayout() {
  return (
    <>
      <NavBar />

      <Outlet />
    </>
  );
}
export default AppLayout;
