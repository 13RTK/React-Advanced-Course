import { createClient } from '@supabase/supabase-js';
import { getConfig } from './configHelper';

const supabaseUrl = 'https://ajjatdyrdahhsidnovns.supabase.co';
const supabaseKey = getConfig('SUPABASE_KEY');
export const supabase = createClient(supabaseUrl, supabaseKey);
