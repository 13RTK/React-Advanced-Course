import { authClient } from '../auth';

export async function getUserProfile() {
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
