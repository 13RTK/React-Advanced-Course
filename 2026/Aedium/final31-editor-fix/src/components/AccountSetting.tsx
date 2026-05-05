import { UserAvatar } from '@neondatabase/neon-js/auth/react';
import { Link } from '@tanstack/react-router';
import RootLayout from './RootLayout';
import { useUserProfile } from './userProfile';
import RequireLogin from './RequireLogin';

function AccountSetting() {
  const { name, setName, isUpdating, handleUpdate, user, isLoading } =
    useUserProfile();

  return (
    <RequireLogin>
      <RootLayout>
        <form className="flex items-center justify-center min-h-screen">
          {isLoading && <div className="skeleton h-32 w-xs"></div>}
          {!isLoading && (
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <UserAvatar
                className="mx-auto size-20 cursor-pointer border-2 border-green-500"
                user={user}
              />
              <label className="label">
                Email
                {!user?.emailVerified && (
                  <Link className="link link-error" to="/auth/verify-email">
                    (need to verify)
                  </Link>
                )}
              </label>
              <input
                type="text"
                disabled
                className="input"
                placeholder="My awesome page"
                value={user?.email}
              />

              <label className="label">Username</label>
              <input
                type="text"
                className="input"
                placeholder="Your username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isUpdating}
              />

              <Link
                className="link link-secondary text-right"
                to="/auth/$pathname"
                params={{ pathname: 'forgot-password' }}
              >
                reset password
              </Link>

              <button
                className="btn btn-primary"
                onClick={handleUpdate}
                disabled={isUpdating}
              >
                {isUpdating && (
                  <span className="loading loading-spinner"></span>
                )}
                {!isUpdating && 'Update'}
              </button>
            </fieldset>
          )}
        </form>
      </RootLayout>
    </RequireLogin>
  );
}

export default AccountSetting;
