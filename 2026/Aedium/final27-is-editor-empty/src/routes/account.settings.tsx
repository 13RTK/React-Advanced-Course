import { createFileRoute } from '@tanstack/react-router';
import AccountSetting from '../components/AccountSetting';

export const Route = createFileRoute('/account/settings')({
  component: AccountSetting,
});
