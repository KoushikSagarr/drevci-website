// In-memory waitlist store for MVP
// In production, replace with a database or Resend API

let waitlistEmails: string[] = [];
const INITIAL_COUNT = 247;

export function addEmail(email: string): boolean {
  if (waitlistEmails.includes(email)) {
    return false; // already exists
  }
  waitlistEmails.push(email);
  console.log("[waitlist] New signup:", email, `(total: ${getCount()})`);
  return true;
}

export function getCount(): number {
  return INITIAL_COUNT + waitlistEmails.length;
}

export function getEmails(): string[] {
  return [...waitlistEmails];
}

export function hasEmail(email: string): boolean {
  return waitlistEmails.includes(email);
}
