import { Target } from 'lucide-react'
import { ROUTES } from '@/lib/constants/routes'
import { User } from '@/types/user.types'
import { BaseHeader } from './base-header'

export function AffiliateHeader({ user }: { user?: User | null }) {
  return (
    <BaseHeader
      user={user}
      logo={Target}
      title="HeyBirdy"
      subtitle="Partner"
      dashboardHref={ROUTES.AFFILIATE.DASHBOARD}
      searchPlaceholder="Search programs, links, payouts..."
      badgeText="GOLD PARTNER"
      userTypeLabel="Elite Affiliate"
    />
  )
}
