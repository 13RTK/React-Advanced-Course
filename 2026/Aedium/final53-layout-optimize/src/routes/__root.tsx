import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { authClient } from '@/utils/neon';
import { NeonAuthUIProvider } from '@neondatabase/neon-js/auth/react';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { DevTools } from 'jotai-devtools';
import 'jotai-devtools/styles.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const RootLayoutComponent = () => (
  <NeonAuthUIProvider authClient={authClient} emailOTP>
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster />
      <TanStackRouterDevtools />
      <DevTools position="bottom-right" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </NeonAuthUIProvider>
);

export const Route = createRootRoute({ component: RootLayoutComponent });
