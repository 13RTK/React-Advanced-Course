import { AuthView } from '@neondatabase/neon-js/auth/react';
import { Route } from '../routes/auth.$pathname';
import '../neon.css';

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
      <AuthView pathname={pathname} />
    </div>
  );
}

export default Auth;
