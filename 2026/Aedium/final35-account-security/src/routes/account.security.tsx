import { createFileRoute } from '@tanstack/react-router';
import AccountSecurity from '../components/AccountSecurity';

export const Route = createFileRoute('/account/security')({
  component: AccountSecurity,
});
