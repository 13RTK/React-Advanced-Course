import { createFileRoute, Outlet } from '@tanstack/react-router';
import RootLayout from '@/components/RootLayout';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { userAtom } from '@/atoms/user';
import { useUserProfile } from '@/components/userProfile';

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
});

function RouteComponent() {
  const setUser = useSetAtom(userAtom);
  const { user } = useUserProfile();

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);

  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
}
