create table public.chat_visitors (
  id uuid primary key default gen_random_uuid(), user_id uuid not null unique references auth.users(id) on delete cascade,
  session_id uuid not null unique, name text, email text, phone text, preferred_language text check (preferred_language in ('ar','en')),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), last_seen_at timestamptz not null default now()
);
create table public.chat_agents (
  id uuid primary key default gen_random_uuid(), user_id uuid not null unique references auth.users(id) on delete cascade,
  name text not null, role text not null check (role in ('admin','agent')), status text not null default 'offline' check (status in ('online','away','offline')),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.chat_conversations (
  id uuid primary key default gen_random_uuid(), visitor_id uuid not null references public.chat_visitors(id) on delete cascade,
  status text not null default 'ai' check (status in ('ai','waiting_for_agent','human','closed')), language text not null default 'en' check (language in ('ar','en')),
  assigned_agent_id uuid references public.chat_agents(id) on delete set null, summary text, division text, lead_data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), last_message_at timestamptz not null default now(), closed_at timestamptz
);
create table public.chat_messages (
  id uuid primary key default gen_random_uuid(), conversation_id uuid not null references public.chat_conversations(id) on delete cascade,
  sender_type text not null check (sender_type in ('visitor','ai','agent','system')), sender_id uuid references public.chat_agents(id) on delete set null,
  content text not null check (char_length(content) between 1 and 2000), metadata jsonb not null default '{}'::jsonb, created_at timestamptz not null default now(), read_at timestamptz
);
create index chat_messages_conversation_created_at_idx on public.chat_messages(conversation_id, created_at);
create index chat_conversations_status_idx on public.chat_conversations(status);
create index chat_conversations_last_message_at_idx on public.chat_conversations(last_message_at desc);
create index chat_conversations_visitor_id_idx on public.chat_conversations(visitor_id);
create or replace function public.set_chat_updated_at() returns trigger language plpgsql as $$ begin new.updated_at = now(); return new; end; $$;
create trigger chat_visitors_updated_at before update on public.chat_visitors for each row execute function public.set_chat_updated_at();
create trigger chat_agents_updated_at before update on public.chat_agents for each row execute function public.set_chat_updated_at();
create trigger chat_conversations_updated_at before update on public.chat_conversations for each row execute function public.set_chat_updated_at();
alter table public.chat_visitors enable row level security; alter table public.chat_agents enable row level security; alter table public.chat_conversations enable row level security; alter table public.chat_messages enable row level security;
create policy "visitor owns profile" on public.chat_visitors for select to authenticated using ((select auth.uid()) = user_id);
create policy "visitor updates profile" on public.chat_visitors for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "visitor reads own conversations" on public.chat_conversations for select to authenticated using (exists (select 1 from public.chat_visitors v where v.id = visitor_id and v.user_id = (select auth.uid())));
create policy "visitor reads own messages" on public.chat_messages for select to authenticated using (exists (select 1 from public.chat_conversations c join public.chat_visitors v on v.id = c.visitor_id where c.id = conversation_id and v.user_id = (select auth.uid())));
create policy "agent reads own profile" on public.chat_agents for select to authenticated using ((select auth.uid()) = user_id);
create policy "agents read conversations" on public.chat_conversations for select to authenticated using (exists (select 1 from public.chat_agents a where a.user_id = (select auth.uid()) and a.role in ('admin','agent')));
create policy "agents update conversations" on public.chat_conversations for update to authenticated using (exists (select 1 from public.chat_agents a where a.user_id = (select auth.uid()) and a.role in ('admin','agent'))) with check (exists (select 1 from public.chat_agents a where a.user_id = (select auth.uid()) and a.role in ('admin','agent')));
create policy "agents read messages" on public.chat_messages for select to authenticated using (exists (select 1 from public.chat_agents a where a.user_id = (select auth.uid()) and a.role in ('admin','agent')));
alter publication supabase_realtime add table public.chat_messages; alter publication supabase_realtime add table public.chat_conversations;
-- After creating the manager's Supabase Auth user, seed their internal role once:
-- insert into public.chat_agents (user_id, name, role, status) values ('AUTH_USER_UUID', 'Mohannad', 'admin', 'online');
