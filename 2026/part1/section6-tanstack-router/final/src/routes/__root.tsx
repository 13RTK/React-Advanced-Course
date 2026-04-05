import {
  createRootRoute,
  Outlet,
  useLocation,
  useNavigate,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleNavigate() {
    const pathname = location.pathname;

    if (pathname === '/') {
      navigate({
        to: '/about',
      });
      return;
    }

    navigate({
      to: '/',
    });
  }

  return (
    <>
      <button type="button" onClick={handleNavigate}>
        Toggle
      </button>
      <Outlet />

      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({ component: App });
