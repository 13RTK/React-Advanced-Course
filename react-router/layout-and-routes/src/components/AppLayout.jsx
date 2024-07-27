import { Outlet, useNavigate, useLocation } from 'react-router-dom';

function AppLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function toggle() {
    if (pathname === '/') {
      navigate('/about');
      return;
    }

    navigate('/');
  }

  return (
    <>
      <button onClick={toggle}>Toggle</button>
      <Outlet />
    </>
  );
}
export default AppLayout;
