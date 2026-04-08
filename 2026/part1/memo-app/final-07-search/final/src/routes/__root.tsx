import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import BottomNav from '../components/BottomNav';
import Navbar from '../components/Navbar';
import { Toaster } from 'sonner';

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
    <TanStackRouterDevtools />
    <Toaster richColors />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
