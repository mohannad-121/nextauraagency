import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function requireVisitor() {
  const client = await createSupabaseServerClient();
  const { data } = await client.auth.getClaims();
  const userId = data?.claims?.sub;
  if (!userId) throw new Error("Anonymous chat session is required.");

  const { data: existing, error } = await client
    .from("chat_visitors")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();
  if (error) throw error;
  if (existing) return { userId, visitor: existing, client };

  const { data: visitor, error: createError } = await client
    .from("chat_visitors")
    .insert({ user_id: userId, session_id: crypto.randomUUID() })
    .select("*")
    .single();
  if (createError) throw createError;
  return { userId, visitor, client };
}

export async function requireAgent() {
  const client = await createSupabaseServerClient();
  const { data } = await client.auth.getClaims();
  const userId = data?.claims?.sub;
  if (!userId) throw new Error("Authentication is required.");

  const { data: agent, error } = await client
    .from("chat_agents")
    .select("*")
    .eq("user_id", userId)
    .in("role", ["admin", "agent"])
    .maybeSingle();
  if (error) throw error;
  if (!agent) throw new Error("Agent authorization is required.");
  return { userId, agent, client };
}
