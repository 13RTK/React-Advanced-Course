import { createFileRoute } from '@tanstack/react-router';
import Auth from '@/features/auth/Auth';

export const Route = createFileRoute('/auth/$pathname')({
  component: Auth,
});
