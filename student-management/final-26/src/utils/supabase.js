import { createClient } from '@supabase/supabase-js';
import { getConfig } from './configHelper';

const supabaseUrl = getConfig('SUPABASE_URL');
const supabaseKey = getConfig('SUPABASE_KEY');

export const supabase = createClient(supabaseUrl, supabaseKey);
