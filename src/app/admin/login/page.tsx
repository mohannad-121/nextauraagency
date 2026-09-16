"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/browser";

export default function AdminLoginPage() {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setPending(true); setError("");
    const form = new FormData(event.currentTarget);
    try {
      const { error: signInError } = await createBrowserSupabaseClient().auth.signInWithPassword({ email: String(form.get("email")), password: String(form.get("password")) });
      if (signInError) throw signInError;
      router.push("/admin/chat");
    } catch (cause) { setError(cause instanceof Error ? cause.message : "Unable to sign in."); } finally { setPending(false); }
  };
  return <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-[#F4F0E7]"><form onSubmit={submit} className="w-full max-w-md space-y-5 rounded-3xl border border-white/10 bg-[#0D0D0D] p-8"><p className="text-xs font-mono uppercase tracking-[.2em] text-[#C9A45C]">NextAura Internal</p><h1 className="text-3xl font-light uppercase">Chat Inbox</h1><input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-white/10 bg-black/30 p-4 text-sm outline-none focus:border-[#C9A45C]" /><input name="password" type="password" required placeholder="Password" className="w-full rounded-xl border border-white/10 bg-black/30 p-4 text-sm outline-none focus:border-[#C9A45C]" />{error && <p className="text-sm text-red-300">{error}</p>}<button disabled={pending} className="w-full rounded-xl bg-[#C9A45C] py-3 text-xs font-semibold uppercase tracking-widest text-black disabled:opacity-50">{pending ? "Signing in…" : "Sign in"}</button></form></main>;
}
