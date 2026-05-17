import { useUserProfile } from '@/hooks/userProfile';
import AccountSettingForm from './AccountSettingForm';

function AccountSetting() {
  const { user, isLoading } = useUserProfile();

  return (
    <form className="flex items-center justify-center content-layout-h">
      {!user || isLoading ? (
        <div className="skeleton h-32 w-xs"></div>
      ) : (
        <AccountSettingForm user={user} />
      )}
    </form>
  );
}

export default AccountSetting;
