import { createSupabaseServerClient, createSupabaseServiceClient } from "@/lib/supabase/server";

export async function requireVisitor() {
  const auth = await createSupabaseServerClient();
  const { data } = await auth.auth.getClaims();
  const userId = data?.claims?.sub;
  if (!userId) throw new Error("Anonymous chat session is required.");

  const service = createSupabaseServiceClient();
  const { data: existing, error } = await service
    .from("chat_visitors")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();
  if (error) throw error;
  if (existing) return { userId, visitor: existing, service };

  const { data: visitor, error: createError } = await service
    .from("chat_visitors")
    .insert({ user_id: userId, session_id: crypto.randomUUID() })
    .select("*")
    .single();
  if (createError) throw createError;
  return { userId, visitor, service };
}

export async function requireAgent() {
  const auth = await createSupabaseServerClient();
  const { data } = await auth.auth.getClaims();
  const userId = data?.claims?.sub;
  if (!userId) throw new Error("Authentication is required.");

  const service = createSupabaseServiceClient();
  const { data: agent, error } = await service
    .from("chat_agents")
    .select("*")
    .eq("user_id", userId)
    .in("role", ["admin", "agent"])
    .maybeSingle();
  if (error) throw error;
  if (!agent) throw new Error("Agent authorization is required.");
  return { userId, agent, service };
}
