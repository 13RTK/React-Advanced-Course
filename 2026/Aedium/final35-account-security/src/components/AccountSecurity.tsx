import { SecuritySettingsCards } from '@neondatabase/neon-js/auth/react';
import RootLayout from './RootLayout';

function AccountSecurity() {
  return (
    <RootLayout>
      <main className="w-4/5 mx-auto flex items-center min-h-screen">
        <SecuritySettingsCards />
      </main>
    </RootLayout>
  );
}

export default AccountSecurity;
