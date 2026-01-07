import { AffiliateHeader } from './header/affiliate-header'
import { AffiliateSidebar } from './sidebar/affiliate-sidebar'
import { User } from '@/types/user.types'
import { BaseLayout } from './base-layout'

interface AffiliateLayoutProps {
  user?: User | null
  children: React.ReactNode
}

export function AffiliateLayout({ user, children }: AffiliateLayoutProps) {
  return (
    <BaseLayout 
      user={user} 
      header={<AffiliateHeader user={user} />} 
      sidebar={<AffiliateSidebar />}
    >
      {children}
    </BaseLayout>
  )
}
