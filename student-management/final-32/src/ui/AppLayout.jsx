import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../hooks/useAuth';

function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function isLogin() {
      const isAuth = await isAuthenticated();

      if (!isAuth) {
        navigate('/login');
      }
    }

    if (location.pathname !== '/login' && location.pathname !== '/signup') {
      isLogin();
    }
  }, []);

  return <Outlet />;
}

export default AppLayout;
