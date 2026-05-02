import { toast } from 'sonner';
import { authClient } from '../auth';
import { getUserProfile } from './userHelper';
import { type UseNavigateResult } from '@tanstack/react-router';

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

export async function verifyEmailCode(
  navigate: UseNavigateResult<string>,
  code: string,
) {
  try {
    if (!code.trim().length) {
      throw new Error('Code is required');
    }

    const user = await getUserProfile();
    if (!user) {
      throw new Error('User not found');
    }

    const { data, error } = await authClient.emailOtp.verifyEmail({
      email: user.email,
      otp: code,
    });
    if (error) {
      throw error;
    }

    // Check if auto-sign-in is enabled (default behavior)
    toast.success('Email verified successfully');
    if (data.user) {
      navigate({ to: '/' });
    } else {
      navigate({ to: '/auth/$pathname', params: { pathname: 'sign-in' } });
    }
  } catch (error: any) {
    console.error(error);
    toast.error(error.message || 'Error while verifying email');
  }
}
