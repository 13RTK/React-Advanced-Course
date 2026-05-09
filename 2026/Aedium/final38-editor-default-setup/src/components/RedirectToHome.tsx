import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

function RedirectToHome() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: '/' });
  }, []);

  return null;
}

export default RedirectToHome;
