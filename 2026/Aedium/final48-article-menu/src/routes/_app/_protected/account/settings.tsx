import { createFileRoute } from '@tanstack/react-router';
import AccountSetting from '../../../../components/AccountSetting';

export const Route = createFileRoute('/_app/_protected/account/settings')({
  component: AccountSetting,
});
