import { useState } from 'react';
import type { User } from '../types/User';

export function useUploadAvatar(currentAvatarFile: File | null) {}

export function useChangeAvatar(user: User) {
  const [avatarURL, setAvatarURL] = useState(user.image || '');
  const [currentAvatarFile, setCurrentAvatarFile] = useState<File | null>(null);

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const avatarFile = event.target.files![0];

    const fileURL = URL.createObjectURL(avatarFile);
    setAvatarURL(fileURL);
    setCurrentAvatarFile(avatarFile);
  }

  return {
    avatarURL,
    setAvatarURL,
    currentAvatarFile,
    setCurrentAvatarFile,
    handleImageChange,
  };
}
