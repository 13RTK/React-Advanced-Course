import { Outlet, useLocation } from 'react-router-dom';

import NavBar from '../ui/NavBar';
import Toolbar from '../ui/Toolbar';

function Home() {
  const location = useLocation();

  return (
    <>
      <NavBar />

      {(location.pathname === '/home/score' ||
        location.pathname === '/home/student') && <Toolbar />}

      <Outlet />
    </>
  );
}
export default Home;
