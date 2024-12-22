import { supabase } from '../utils/supabase';

export async function signup(email, password, metadata = {}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: `${email}-${Date.now()}`,
        avatar:
          'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
        ...metadata,
      },
    },
  });

  if (error) {
    console.log(error.message);
    return;
  }

  return data;
}

export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log(error.message);
    return;
  }

  return data;
}

export async function signout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error.message);
  }
}

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function updateUser(newUserMetadata = {}) {
  const { data, error } = await supabase.auth.updateUser({
    data: newUserMetadata,
  });

  if (error) {
    console.log(error.message);
    return;
  }

  return data;
}
