export const ROLES = {
  ADMIN: 'admin',
  CREATOR: 'creator',
  AFFILIATE: 'affiliate',
  MEMBER: 'member',
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];
