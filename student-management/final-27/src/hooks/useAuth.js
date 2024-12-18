import { getUser } from '../services/apiAuth';

export async function isAuthenticated() {
  const user = await getUser();

  if (!user) {
    return false;
  }

  return true;
}
