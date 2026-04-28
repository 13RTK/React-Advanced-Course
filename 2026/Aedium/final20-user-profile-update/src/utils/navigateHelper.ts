import type { UseNavigateResult } from '@tanstack/react-router';
import { isEmailVerified } from './userHelper';

export async function navigateToEditor(navigate: UseNavigateResult<string>) {
  const result = await isEmailVerified();

  if (!result) {
    navigate({ to: '/auth/verify-email' });
    return;
  }

  navigate({ to: '/editor' });
}
