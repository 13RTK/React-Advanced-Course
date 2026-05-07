import { useState } from 'react';
import type { User } from '../types/User';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '../utils/supabase';
import { toast } from 'sonner';

export function useUploadAvatar(currentAvatarFile: File | null) {
  const { mutateAsync: uploadAvatar, isPending: isUploading } = useMutation({
    mutationFn: async () => {
      if (!currentAvatarFile) {
        throw new Error('No file selected');
      }

      const { data, error } = await supabase.storage
        .from('aedium-images')
        .upload(`${Date.now()}-${currentAvatarFile.name}`, currentAvatarFile);
      if (error) {
        throw error;
      }

      return data;
    },

    onError: (error) => {
      toast.error(error.message || 'Error while uploading avatar');
    },

    onSuccess: () => {
      toast.success('Avatar uploaded successfully');
    },
  });

  return {
    uploadAvatar,
    isUploading,
  };
}

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
