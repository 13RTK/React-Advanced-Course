import { createFileRoute, Outlet } from '@tanstack/react-router';
import RequireLogin from '@/ui/RequireLogin';
import RequireVerifiedEmail from '@/ui/RequireVerifiedEmail';

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
