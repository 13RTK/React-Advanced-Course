import {
  AuthView,
  SignedIn,
  SignedOut,
} from '@neondatabase/neon-js/auth/react';
import { Route } from '../routes/auth.$pathname';
import { Route as IndexRoute } from '../routes/index';
import RedirectToHome from './RedirectToHome';

function Auth() {
  const { pathname } = Route.useParams();

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <AuthView
          className="auth-page"
          pathname={pathname}
          redirectTo={pathname === 'sign-out' ? IndexRoute.to : undefined}
        />
      </div>

      <SignedIn>
        <RedirectToHome />
      </SignedIn>
    </>
  );
}

export default Auth;
