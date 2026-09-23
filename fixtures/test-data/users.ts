// Seeded login test data. Matches the demo accounts documented in the
// repo's own README ("Seeded logins") — they're intentionally public,
// since this app has no backend and no real secrets to protect.

export interface SeededUser {
  email: string;
  password: string;
}

export const SEEDED_USERS: Record<'admin' | 'accountant', SeededUser> = {
  admin: { email: 'admin@qa.test', password: 'admin123' },
  accountant: { email: 'accountant@qa.test', password: 'acct123' },
};

export type SeededRole = keyof typeof SEEDED_USERS;
