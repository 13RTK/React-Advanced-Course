import { useNavigate } from '@tanstack/react-router';
import { useUserProfile } from '../hooks/userProfile';
import { useEffect } from 'react';
import Loading from './Loading';

function RequireVerifiedEmail({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useUserProfile();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user && !user.emailVerified) {
      navigate({ to: '/auth/verify-email' });
    }
  }, [isLoading, user]);

  if (isLoading) {
    return <Loading />;
  }

  return children;
}

export default RequireVerifiedEmail;
