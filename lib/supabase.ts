import { createClient } from '@supabase/supabase-js';

declare global {
  var supabase: any;
}

export const supabase =
  global.supabase ||
  createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

if (process.env.NODE_ENV !== 'production') {
  global.supabase = supabase;
}
