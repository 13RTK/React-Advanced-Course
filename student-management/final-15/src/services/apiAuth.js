import { supabase } from '../utils/supabase';

export async function signup(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.log(error.message);
    return;
  }

  return data;
}
