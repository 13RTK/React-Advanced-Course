import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'sonner';
import { authClient } from '../auth';
import { getUserProfile } from '../utils/userHelper';
import type { User } from '../types/User';

export function useUserProfile() {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user-profile'],
    queryFn: async () => {
      const user = await getUserProfile();

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    },
  });

  return {
    user,
    isLoading,
  };
}

export function useUserUpdate(user: User, currentAvatarFile: File | null) {
  const queryClient = useQueryClient();

  const [name, setName] = useState(user.name || '');

  const { isPending: isUpdating, mutate: handleUpdate } = useMutation({
    mutationFn: async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      let newName = '';
      let newAvatarURL = '';

      if (!name.length) {
        throw new Error('Name is required');
      }

      if (name !== user.name) {
        newName = name;
      }

      if (!newName && !currentAvatarFile) {
        throw new Error('nothing to update');
      }

      if (currentAvatarFile) {
        // TODO: upload avatar
      }

      const { data, error } = await authClient.updateUser({
        name: newName,
        ...(newAvatarURL && { image: newAvatarURL }),
      });
      if (error) {
        throw error;
      }

      return data;
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['user-profile'],
      });

      toast.success('Profile updated successfully!');
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    name,
    setName,
    isUpdating,
    handleUpdate,
  };
}
