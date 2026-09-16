# NextAura live chat

The visitor widget starts an anonymous Supabase Auth session, creates a visitor profile, and keeps one open conversation. `POST /api/chat/message` saves visitor messages, detects Arabic/English and manager handoff, and uses a deterministic bilingual website knowledge responder while the conversation status is `ai`. `waiting_for_agent` and `human` never invoke the chatbot.

Realtime subscriptions are scoped to the active conversation. The database RLS policies permit a visitor to read only rows whose `chat_visitors.user_id` matches their authenticated anonymous user. Manager APIs validate an authenticated `chat_agents` role server-side. No OpenAI or Supabase service-role key is needed.

Run `supabase/migrations/20260916000000_nextaura_live_chat.sql` in the **NextAura Agency Supabase project**. Do not run it in an unrelated Supabase project. Enable Anonymous Sign-Ins in Supabase Auth, create the manager's Auth user, then run the seed statement at the bottom of the migration with that user's UUID.

Set the variables in `.env.example` locally and in the deployment platform. This chatbot does not require an OpenAI key. Resend is not configured; the notification hook is intentionally left as an optional next step.
