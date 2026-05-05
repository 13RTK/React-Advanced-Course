import { useNavigate } from '@tanstack/react-router';
import { useUserProfile } from './userProfile';
import { useEffect } from 'react';

function RequireNotVerifiedEmail({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useUserProfile();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user && user.emailVerified) {
      navigate({ to: '/' });
    }
  }, [isLoading, user]);

  if (isLoading) {
    return (
      <span className="flex mx-auto min-h-screen loading loading-spinner loading-xl"></span>
    );
  }

  return children;
}

export default RequireNotVerifiedEmail;
