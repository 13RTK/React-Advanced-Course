import RootLayout from './RootLayout';
import { useUserProfile } from './userProfile';
import RequireLogin from './RequireLogin';
import AccountSettingForm from './AccountSettingForm';

function AccountSetting() {
  const { user, isLoading } = useUserProfile();

  return (
    <RequireLogin>
      <RootLayout>
        <form className="flex items-center justify-center min-h-screen">
          {!user || isLoading ? (
            <div className="skeleton h-32 w-xs"></div>
          ) : (
            <AccountSettingForm user={user} />
          )}
        </form>
      </RootLayout>
    </RequireLogin>
  );
}

export default AccountSetting;
