import { cookies } from 'next/headers'
import { AffiliateLayout } from '@/components/layout/affiliate-layout'
import { verifyJWT } from '@/lib/auth/session'
import { User } from '@/types/user.types'

export default async function AffiliateRouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth-token')?.value

  let user: User | null = null
  try {
    if (token) {
      const payload = await verifyJWT(token)
      user = {
        id: payload.userId,
        name: 'Affiliate User', // This would come from a database/session
        email: 'affiliate@heybirdy.com',
        roles: payload.roles,
        points: 0,
        badges: []
      }
    }
  } catch (e) {
    console.error('Failed to verify token', e)
  }

  return (
    <AffiliateLayout user={user}>
      {children}
    </AffiliateLayout>
  )
}
