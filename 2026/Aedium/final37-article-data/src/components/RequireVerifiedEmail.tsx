import { useNavigate } from '@tanstack/react-router';
import { useUserProfile } from './userProfile';
import { useEffect } from 'react';

function RequireVerifiedEmail({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useUserProfile();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user && !user.emailVerified) {
      navigate({ to: '/auth/verify-email' });
    }
  }, [isLoading, user]);

  if (isLoading) {
    return (
      <span className="flex mx-auto min-h-screen loading loading-spinner loading-xl"></span>
    );
  }

  return children;
}

export default RequireVerifiedEmail;
