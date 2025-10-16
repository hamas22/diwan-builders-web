import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aoziiihrxigalhykoord.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvemlpaWhyeGlnYWxoeWtvb3JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyNjQ0NDAsImV4cCI6MjA3NDg0MDQ0MH0.5qBifRTSWW-ldzabqWYKL1dop5gQ8bpq3LuwbVGaxLk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
