import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import BottomNav from '../components/BottomNav';
import Navbar from '../components/Navbar';

const RootLayout = () => (
  <>
    <Navbar />
    <main
      style={{
        marginBottom: '56px',
        marginTop: '56px',
      }}
    >
      <Outlet />
    </main>
    <BottomNav />
    {/* <TanStackRouterDevtools /> */}
  </>
);

export const Route = createRootRoute({ component: RootLayout });
