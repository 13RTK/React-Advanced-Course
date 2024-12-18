import { supabase } from '../utils/supabase';

export async function uploadAvatar(avatarFile, avatarFilename) {
  const { error } = await supabase.storage
    .from('avatar')
    .upload(`public/${avatarFilename}`, avatarFile, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    console.log(error.message);
    return;
  }
}
