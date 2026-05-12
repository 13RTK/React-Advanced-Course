import { createFileRoute } from '@tanstack/react-router';
import AccountSecurity from '../../../../components/AccountSecurity';

export const Route = createFileRoute('/_app/_protected/account/security')({
  component: AccountSecurity,
});
