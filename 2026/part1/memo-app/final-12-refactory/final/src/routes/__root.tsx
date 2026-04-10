import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import BottomNav from '../ui/BottomNav';
import Navbar from '../ui/Navbar';
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
    <Toaster richColors position="top-center" />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
