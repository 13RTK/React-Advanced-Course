import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { authClient } from '../auth';
import { NeonAuthUIProvider } from '@neondatabase/neon-js/auth/react';

const RootLayoutComponent = () => (
  <NeonAuthUIProvider authClient={authClient}>
    <Outlet />
    <TanStackRouterDevtools />
  </NeonAuthUIProvider>
);

export const Route = createRootRoute({ component: RootLayoutComponent });
