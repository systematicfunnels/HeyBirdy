export const ROUTES = {
  // Global Navigation
  HOME: '/',
  EXPLORE: '/explore',
  SEARCH: '/search',
  NOTIFICATIONS: '/notifications',
  MESSAGES: '/messages',
  LEARN: '/learn',
  EARN: '/earn',
  
  // Public Pages
  PROFILE: (username: string) => `/profile/${username}`,
  CONTENT: (slug: string) => `/content/${slug}`,
  CHANNEL: (creator: string) => `/channel/${creator}`,
  
  // Auth
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  ONBOARDING: '/onboarding',
  
  // Creator Portal
  CREATOR: {
    DASHBOARD: '/creator',
    OVERVIEW: '/creator/overview',
    CONTENT: {
      ROOT: '/creator/content',
      ALL: '/creator/content/all',
      NEW: '/creator/content/new',
      CALENDAR: '/creator/content/calendar',
      TEMPLATES: '/creator/content/templates',
    },
    AFFILIATE: {
      ROOT: '/creator/affiliate',
      SETTINGS: '/creator/affiliate/settings',
      NETWORK: '/creator/affiliate/network',
      TOOLS: '/creator/affiliate/tools',
      ANALYTICS: '/creator/affiliate/analytics',
    },
    MONETIZATION: {
      ROOT: '/creator/monetization',
      REVENUE: '/creator/monetization/revenue',
      SETTINGS: '/creator/monetization/settings',
      PRICING: '/creator/monetization/pricing',
      PRODUCTS: '/creator/monetization/products',
    },
    COMMUNITY: '/creator/community',
    ANALYTICS: '/creator/analytics',
    SETTINGS: '/creator/settings',
  },
  
  // Affiliate Hub
  AFFILIATE: {
    DASHBOARD: '/affiliate',
    DISCOVER: '/affiliate/discover',
    PROGRAMS: '/affiliate/programs',
    TOOLS: {
      ROOT: '/affiliate/tools',
      LINKS: '/affiliate/tools/links',
      ASSETS: '/affiliate/tools/assets',
      TRACKING: '/affiliate/tools/tracking',
      PROMO_CODES: '/affiliate/tools/promo-codes',
    },
    EARNINGS: '/affiliate/earnings',
    ANALYTICS: '/affiliate/analytics',
    LEARNING: '/affiliate/learning',
    COMMUNITY: '/affiliate/community',
    LEADERBOARD: '/affiliate/leaderboard',
    PAYOUTS: '/affiliate/payouts',
    NETWORK: '/affiliate/network',
    REFER: '/affiliate/refer',
    MESSAGES: '/affiliate/messages',
    SETTINGS: '/affiliate/settings',
    LINKS: '/affiliate/tools/links',
    ASSETS: '/affiliate/tools/assets',
  },
  
  // Member Flow
  MEMBER: {
    FEED: '/feed',
    LEARNING_HUB: '/learn',
    EARN_HUB: '/earn',
    COMMUNITY: '/community',
    SETTINGS: '/settings',
  },
  
  // Global Footers/Misc
  HELP: '/help',
  LEGAL: '/legal',
  SETTINGS: '/settings',
} as const;
