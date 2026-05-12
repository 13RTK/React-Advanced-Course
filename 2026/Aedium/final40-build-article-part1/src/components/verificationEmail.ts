import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { authClient } from '../utils/neon';
import { getUserProfile } from '../utils/userHelper';
import { type UseNavigateResult } from '@tanstack/react-router';

export function useSendVerificationEmail(
  setResendTimer: (resendTimer: number) => void,
) {
  const { isPending, mutate: sendVerificationEmail } = useMutation({
    mutationKey: ['send-verification-code'],
    mutationFn: async () => {
      const user = await getUserProfile();
      if (!user) {
        throw new Error('User not found');
      }

      const { error } = await authClient.sendVerificationEmail({
        email: user.email,
        callbackURL: window.location.origin + '/',
      });

      if (error) {
        throw error;
      }
    },

    onSuccess: () => {
      toast.success('Verification Email Sent');
      setResendTimer(60);
    },

    onError: (error) => {
      console.error(error);
      toast.error('Error while sending verification email');
    },
  });

  useEffect(() => {
    sendVerificationEmail();
  }, []);

  return {
    isPending,
    sendVerificationEmail,
  };
}

export function useResendCountDown() {
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        return prev - 1;
      });
    }, 1000);

    if (resendTimer <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [resendTimer]);

  return {
    resendTimer,
    setResendTimer,
  };
}

export function useVerifyEmailCode(navigate: UseNavigateResult<string>) {
  const [code, setCode] = useState('');

  const { mutate: verifyEmailCode, isPending: isVerifying } = useMutation({
    mutationFn: async () => {
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

      return data;
    },
    mutationKey: ['verify-email'],

    onSuccess: (data) => {
      toast.success('Email verified successfully');
      if (data.user) {
        navigate({ to: '/' });
      } else {
        navigate({ to: '/auth/$pathname', params: { pathname: 'sign-in' } });
      }
    },

    onError: (error) => {
      console.error(error);
      toast.error(error.message || 'Error while verifying email');
    },
  });

  return {
    code,
    setCode,
    verifyEmailCode,
    isVerifying,
  };
}
