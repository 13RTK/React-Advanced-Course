import { AuthView } from '@neondatabase/neon-js/auth/react';
import { Route } from '../routes/auth.$pathname';

function Auth() {
  const { pathname } = Route.useParams();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <AuthView className="auth-page" pathname={pathname} />
    </div>
  );
}

export default Auth;
