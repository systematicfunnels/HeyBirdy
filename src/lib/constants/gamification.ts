export const POINTS_CONFIG = {
  // Member Actions
  CONTENT_VIEW: 10,
  CONTENT_SHARE: 25,
  COURSE_COMPLETION: 500,
  MODULE_COMPLETED: 50,
  QUIZ_PASSED: 100,
  STREAK_7_DAY: 100,
  COMMENT_POSTED: 10,
  HELPFUL_COMMENT: 25,
  REFERRAL_INVITE: 200,

  // Affiliate Actions
  LINK_CREATED: 100,
  FIRST_SHARE: 50,
  FIRST_CLICK: 25,
  AFFILIATE_REFERRAL: 50,
} as const;

export const BADGES = {
  // Global
  NEWBIE: 'newbie',
  
  // Creator Badges
  PROFILE_PRO: 'profile_pro',
  FIRST_CREATOR: 'first_creator',
  READY_TO_EARN: 'ready_to_earn',
  RISING_STAR: 'rising_star',
  EARNING_PRO: 'earning_pro',
  NETWORK_BUILDER: 'network_builder',
  TOP_CREATOR: 'top_creator',

  // Affiliate Badges
  FIRST_SALE: 'first_sale',
  CENTURION: 'centurion',
  ELITE_AFFILIATE: 'elite_affiliate',

  // Member Badges
  TOP_SHARER: 'top_sharer',
  EARLY_BIRD: 'early_bird',
} as const;

export const REWARD_TIERS = {
  BRONZE: { name: 'Bronze', minPoints: 0, maxPoints: 1000 },
  SILVER: { name: 'Silver', minPoints: 1001, maxPoints: 5000 },
  GOLD: { name: 'Gold', minPoints: 5001, maxPoints: 15000 },
  PLATINUM: { name: 'Platinum', minPoints: 15001, maxPoints: Infinity },
} as const;
