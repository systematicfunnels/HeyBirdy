import { redirect } from 'next/navigation' 
import { cookies } from 'next/headers'
import { CreatorLayout } from '@/components/layout/creator-layout' 
import { verifyJWT } from '@/lib/auth/session'

export default async function CreatorRouteLayout({ 
  children, 
}: { 
  children: React.ReactNode 
}) { 
  const cookieStore = await cookies()
  const token = cookieStore.get('auth-token')?.value 
 
  if (!token) { 
    // In a real app, you might want to allow some public creator pages or redirect
    // For now, let's assume it's protected as per architecture
    // redirect('/login') 
  } 

  let user = null
  try {
    if (token) {
      const payload = await verifyJWT(token)
      user = {
        id: payload.userId,
        name: 'Creator User', // This would come from a database/session
        email: 'creator@heybirdy.com',
        roles: payload.roles,
      }
    }
  } catch (e) {
    console.error('Failed to verify token', e)
  }
 
  return ( 
    <CreatorLayout user={user}> 
      {children} 
    </CreatorLayout> 
  ) 
} 
