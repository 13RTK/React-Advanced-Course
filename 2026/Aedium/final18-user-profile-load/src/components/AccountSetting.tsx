import { UserAvatar } from '@neondatabase/neon-js/auth/react';
import { Link } from '@tanstack/react-router';
import RootLayout from './RootLayout';
import { getUserProfile } from '../utils/userHelper';
import { useEffect, useState } from 'react';
import type { User } from '../types/User';

function AccountSetting() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [currentUser, setCurrentUser] = useState<null | User>(null);

  async function loadUserProfile() {
    const user = await getUserProfile();

    if (!user) {
      throw new Error('User not found');
    }

    setCurrentUser(user);

    setEmail(user.email);
    setName(user.name);
  }

  useEffect(() => {
    loadUserProfile();
  }, []);

  return (
    <RootLayout>
      <form className="flex items-center justify-center min-h-screen">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <UserAvatar
            className="mx-auto size-20 cursor-pointer border-2 border-green-500"
            user={currentUser}
          />
          <label className="label">Email</label>
          <input
            type="text"
            disabled
            className="input"
            placeholder="My awesome page"
            value={email}
          />

          <label className="label">Username</label>
          <input
            type="text"
            className="input"
            placeholder="my-awesome-page"
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
      </form>
    </RootLayout>
  );
}

export default AccountSetting;
