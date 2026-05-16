import { createFileRoute, Outlet } from '@tanstack/react-router';
import RequireLogin from '@/components/RequireLogin';
import RequireVerifiedEmail from '@/components/RequireVerifiedEmail';

export const Route = createFileRoute('/_app/_protected')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <RequireLogin>
      <RequireVerifiedEmail>
        <Outlet />
      </RequireVerifiedEmail>
    </RequireLogin>
  );
}
