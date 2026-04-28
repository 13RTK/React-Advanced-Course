import { UserAvatar } from '@neondatabase/neon-js/auth/react';
import { Link } from '@tanstack/react-router';
import RootLayout from './RootLayout';
import { getUserProfile } from '../utils/userHelper';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

function AccountSetting() {
  const [name, setName] = useState('');

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user-profile'],
    queryFn: async () => {
      const user = await getUserProfile();

      if (!user) {
        throw new Error('User not found');
      }

      setName(user.name);
      return user;
    },
  });

  // async function loadUserProfile() {
  //   const user = await getUserProfile();

  //   if (!user) {
  //     throw new Error('User not found');
  //   }

  //   setCurrentUser(user);

  //   setEmail(user.email);
  //   setName(user.name);
  // }

  // useEffect(() => {
  //   loadUserProfile();
  // }, []);

  return (
    <RootLayout>
      <form className="flex items-center justify-center min-h-screen">
        {isLoading && <div className="skeleton h-32 w-xs"></div>}
        {!isLoading && (
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <UserAvatar
              className="mx-auto size-20 cursor-pointer border-2 border-green-500"
              user={user}
            />
            <label className="label">Email</label>
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
              placeholder="my-awesome-page"
              defaultValue={user?.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Link
              className="link link-secondary text-right"
              to="/auth/$pathname"
              params={{ pathname: 'forgot-password' }}
            >
              reset password
            </Link>

            <button className="btn btn-primary">Update</button>
          </fieldset>
        )}
      </form>
    </RootLayout>
  );
}

export default AccountSetting;
