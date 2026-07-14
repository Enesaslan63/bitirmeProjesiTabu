import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qhhjgfbkolzotyvzszoi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoaGpnZmJrb2x6b3R5dnpzem9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MDQ5MTYsImV4cCI6MjA3OTQ4MDkxNn0.E_yADqlaPZFzsFqeFi3tEEsygGGxqzySZ-IrleUEsKg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);