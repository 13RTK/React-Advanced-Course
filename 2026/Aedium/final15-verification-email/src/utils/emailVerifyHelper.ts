import { toast } from 'sonner';
import { authClient } from '../auth';
import { getUserProfile } from './userHelper';

export async function sendVerificationEmail() {
  try {
    const user = await getUserProfile();
    if (!user) {
      throw new Error('User not found');
    }

    const { error } = await authClient.sendVerificationEmail({
      email: user.email,
      callbackURL: window.location.origin + '/',
    });
    toast.success('Verification Email Sent');

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error(error);
    toast.error('Error while sending verification email');
  }
}
