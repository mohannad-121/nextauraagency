export function extractLeadData(text: string): Record<string, string> {
  const lead: Record<string, string> = {};
  const email = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0];
  const phone = text.match(/(?:\+?\d[\d\s().-]{7,}\d)/)?.[0]?.trim();

  if (email) lead.email = email;
  if (phone) lead.phone = phone;
  return lead;
}

export function mergeLeadData(
  current: Record<string, string> | null | undefined,
  incoming: Record<string, string>
): Record<string, string> {
  return { ...(current ?? {}), ...incoming };
}
