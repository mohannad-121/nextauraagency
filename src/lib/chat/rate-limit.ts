const requests = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const LIMIT = 12;

export function allowChatRequest(visitorId: string): boolean {
  const now = Date.now();
  const recent = (requests.get(visitorId) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  if (recent.length >= LIMIT) return false;
  recent.push(now);
  requests.set(visitorId, recent);
  return true;
}
