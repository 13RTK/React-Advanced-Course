import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from '@neondatabase/neon-js/auth/react';

function RequireLogin({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default RequireLogin;
