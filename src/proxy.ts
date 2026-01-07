import { NextResponse } from 'next/server' 
import type { NextRequest } from 'next/server' 
import { verifyJWT } from './lib/auth/session' 

// Define protected routes and their required roles 
const protectedRoutes = { 
  '/creator': ['creator', 'admin'], 
  '/affiliate': ['affiliate', 'creator', 'admin'], 
  '/admin': ['admin'], 
} as const 

export async function proxy(request: NextRequest) { 
  const { pathname } = request.nextUrl 
 
  // Check if route is protected 
  const entry = Object.entries(protectedRoutes).find(([route]) => 
    pathname.startsWith(route) 
  )
  
  const requiredRoles = entry ? entry[1] : null;
 
  if (!requiredRoles) { 
    return NextResponse.next() 
  } 
 
  // Get token from cookies 
  const token = request.cookies.get('auth-token')?.value 
 
  if (!token) { 
    return redirectToLogin(request) 
  } 
 
  try { 
    const payload = await verifyJWT(token) 
 
    // Check if user has required role 
    const hasRole = requiredRoles.some(role => 
      payload.roles.includes(role) 
    ) 
 
    if (!hasRole) { 
      return redirectToUnauthorized(request) 
    } 
 
    // Add user info to request headers 
    const requestHeaders = new Headers(request.headers) 
    requestHeaders.set('x-user-id', payload.userId) 
    requestHeaders.set('x-user-roles', JSON.stringify(payload.roles)) 
 
    return NextResponse.next({ 
      request: { 
        headers: requestHeaders, 
      }, 
    }) 
  } catch { 
    return redirectToLogin(request) 
  } 
} 
 
function redirectToLogin(request: NextRequest) { 
  const loginUrl = new URL('/login', request.url) 
  loginUrl.searchParams.set('from', request.nextUrl.pathname) 
  return NextResponse.redirect(loginUrl) 
} 
 
function redirectToUnauthorized(request: NextRequest) { 
  return NextResponse.redirect(new URL('/unauthorized', request.url)) 
} 
 
export const config = { 
  matcher: [ 
    '/creator/:path*', 
    '/affiliate/:path*', 
    '/admin/:path*', 
  ], 
} 
