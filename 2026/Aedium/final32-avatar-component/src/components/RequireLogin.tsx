import { RedirectToSignIn, SignedIn } from '@neondatabase/neon-js/auth/react';

function RequireLogin({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>

      <RedirectToSignIn />
    </>
  );
}

export default RequireLogin;
