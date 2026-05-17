import { Link } from '@tanstack/react-router';
import type { User } from '@/types/User';
import Avatar from '@/ui/Avatar';
import { useUserUpdate } from '@/hooks/userProfile';

import { useChangeAvatar, useUploadAvatar } from '../article/userAvatar';

function AccountSettingForm({ user }: { user: User }) {
  const { avatarURL, currentAvatarFile, handleImageChange } =
    useChangeAvatar(user);

  const { name, setName, handleUpdate, isUpdating, isUploading } =
    useUserUpdate(user, currentAvatarFile);

  useUploadAvatar(currentAvatarFile);

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <label htmlFor="avatar" className="mx-auto cursor-pointer">
        <Avatar avatarURL={avatarURL} username={name} />
      </label>

      <input
        className="hidden"
        id="avatar"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
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
        onChange={(e) => setName(e.target.value.trim())}
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
        {isUpdating && isUploading && (
          <span className="loading loading-spinner"></span>
        )}
        {!isUpdating && !isUploading && 'Update'}
      </button>
    </fieldset>
  );
}

export default AccountSettingForm;
