import { Outlet, useNavigate } from 'react-router';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <button type="button" onClick={() => navigate('/')}>
        Go Home
      </button>
      <button type="button" onClick={() => navigate('/about')}>
        About
      </button>
      {/* <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/about">About</NavLink> */}
      <Outlet />
    </>
  );
}
export default App;
