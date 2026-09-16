import { createSupabaseRequestClient } from "@/lib/supabase/server";

async function authenticatedUserId(client: Awaited<ReturnType<typeof createSupabaseRequestClient>>, request?: Request) {
  const authorization = request?.headers.get("authorization");
  const token = authorization?.match(/^Bearer\s+(.+)$/i)?.[1];

  // API callers supply their browser's Supabase session as a bearer token. Validate
  // that token explicitly; a client configured with request headers does not keep an
  // Auth session in server storage for auth.getClaims() to read.
  if (token) {
    const { data, error } = await client.auth.getUser(token);
    if (error) throw error;
    return data.user?.id;
  }

  const { data } = await client.auth.getClaims();
  return data?.claims?.sub;
}

export async function requireVisitor(request?: Request) {
  const client = await createSupabaseRequestClient(request);
  const userId = await authenticatedUserId(client, request);
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

export async function requireAgent(request?: Request) {
  const client = await createSupabaseRequestClient(request);
  const userId = await authenticatedUserId(client, request);
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
