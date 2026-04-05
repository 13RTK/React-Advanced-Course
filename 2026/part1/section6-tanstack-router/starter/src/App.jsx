import { Outlet, useLocation, useNavigate } from 'react-router';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleNavigate() {
    const pathname = location.pathname;

    if (pathname === '/') {
      navigate('/about');
      return;
    }

    navigate('/');
  }

  return (
    <>
      <button type="button" onClick={handleNavigate}>
        Toggle
      </button>
      {/* <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/about">About</NavLink> */}
      <Outlet />
    </>
  );
}
export default App;
