import { PlayCircle } from 'lucide-react'
import { ROUTES } from '@/lib/constants/routes'
import { User } from '@/types/user.types'
import { BaseHeader } from './base-header'

export function CreatorHeader({ user }: { user?: User | null }) {
  return (
    <BaseHeader
      user={user}
      logo={PlayCircle}
      title="HeyBirdy"
      subtitle="Creator"
      dashboardHref={ROUTES.CREATOR.DASHBOARD}
      searchPlaceholder="Search content, analytics, community..."
      badgeText="VERIFIED CREATOR"
      userTypeLabel="Master Creator"
    />
  )
}
