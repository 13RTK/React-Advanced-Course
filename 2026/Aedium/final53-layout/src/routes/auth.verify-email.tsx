import { createFileRoute } from '@tanstack/react-router';
import EmailVerifyForm from '@/features/auth/EmailVerifyForm';

export const Route = createFileRoute('/auth/verify-email')({
  component: EmailVerifyForm,
});
