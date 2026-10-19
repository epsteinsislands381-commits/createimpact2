/* CreateImpact — Supabase connection (shared by every page).
   The anon key is the PUBLIC key: safe in the browser because Row Level Security
   protects the data. Never put the service_role / secret key in this file. */
(function () {
  var SUPABASE_URL = 'https://acjkjrxnnceeyflukjyo.supabase.co';
  var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjamtqcnhubmNlZXlmbHVranlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIzMTU2MTksImV4cCI6MjEwNzg5MTYxOX0.a6xikgq6M0vrCX5mRJATNpdAvigkwUBzH0n8N-nZQUE';

  if (!window.supabase || !window.supabase.createClient) {
    console.error('Supabase library did not load.');
    return;
  }
  // Use `db` everywhere in the site, e.g. db.from('ngos').select('*')
  window.db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  console.log('Supabase is officially initialized on createimpact.in!');
})();
