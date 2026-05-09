import { createFileRoute, Outlet } from '@tanstack/react-router';
import RootLayout from '../../components/RootLayout';

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
}
