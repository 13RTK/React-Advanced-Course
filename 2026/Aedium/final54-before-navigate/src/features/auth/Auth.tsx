import { AuthView, SignedIn } from '@neondatabase/neon-js/auth/react';
import { Route as AuthRoute } from '@/routes/auth.$pathname';
import { Route as IndexRoute } from '@/routes/_app/index';
import RedirectToHome from '@/ui/RedirectToHome';

function Auth() {
  const { pathname } = AuthRoute.useParams();

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
