import { CreatorHeader } from './header/creator-header'
import { CreatorSidebar } from './sidebar/creator-sidebar'
import { User } from '@/types/user.types'
import { BaseLayout } from './base-layout'

interface CreatorLayoutProps {
  user?: User | null
  children: React.ReactNode
}

export function CreatorLayout({ user, children }: CreatorLayoutProps) {
  return (
    <BaseLayout 
      user={user} 
      header={<CreatorHeader user={user} />} 
      sidebar={<CreatorSidebar />}
    >
      {children}
    </BaseLayout>
  )
}
