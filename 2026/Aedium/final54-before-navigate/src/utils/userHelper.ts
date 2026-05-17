import { authClient } from './neon';
import type { User } from '@/types/User';

export async function getUserProfile(): Promise<User | undefined> {
  const { data, error } = await authClient.getSession();

  if (error) {
    throw error;
  }

  if (data?.user) {
    return data.user;
  }
}

export async function isEmailVerified() {
  const user = await getUserProfile();

  if (!user) {
    throw new Error('User not found');
  }

  return user.emailVerified;
}
