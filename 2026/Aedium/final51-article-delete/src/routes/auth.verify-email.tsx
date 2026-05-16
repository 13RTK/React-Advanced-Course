import { createFileRoute } from '@tanstack/react-router';
import EmailVerifyForm from '@/components/EmailVerifyForm';

export const Route = createFileRoute('/auth/verify-email')({
  component: EmailVerifyForm,
});
