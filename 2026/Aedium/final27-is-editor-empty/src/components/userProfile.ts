import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'sonner';
import { authClient } from '../auth';
import { getUserProfile } from '../utils/userHelper';

export function useUserProfile() {
  const [name, setName] = useState('');

  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
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

  const { isPending: isUpdating, mutate: handleUpdate } = useMutation({
    mutationFn: async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      if (!name.trim().length) {
        throw new Error('Name is required');
      }

      const { data, error } = await authClient.updateUser({
        name,
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
    user,
    isLoading,
    name,
    setName,
    isUpdating,
    handleUpdate,
  };
}
