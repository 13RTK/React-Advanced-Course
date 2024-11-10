import { Outlet } from 'react-router-dom';

import NavBar from '../ui/NavBar';

function Home() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
export default Home;
