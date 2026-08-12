export interface InterestMessage {
  name: string;
  email: string;
  interest: string;
  message: string;
}

export function createInterestMailto(
  recipient: string | undefined,
  value: InterestMessage
): string | null {
  const address = recipient?.trim();
  if (!address) return null;

  const subject = `Sol Kin interest: ${value.interest}`;
  const body = [
    `Name: ${value.name}`,
    `Email: ${value.email}`,
    `Interest: ${value.interest}`,
    "",
    value.message
  ].join("\n");

  return `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
