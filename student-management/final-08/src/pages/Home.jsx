import { Outlet } from 'react-router-dom';

import NavBar from '../ui/NavBar';
import Toolbar from '../ui/Toolbar';

function Home() {
  return (
    <>
      <NavBar />

      <Toolbar />

      <Outlet />
    </>
  );
}
export default Home;
