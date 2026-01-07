import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyJWT } from '@/lib/auth/session';

// Mock users database (should be shared or from a real DB)
const MOCK_USERS = [
  {
    id: '1',
    name: 'Alex Rivera',
    email: 'alex@heybirdy.com',
    roles: ['creator', 'member'],
    avatar: 'https://i.pravatar.cc/150?u=alex',
    points: 2450,
    badges: ['Early Bird', 'Top Creator']
  },
  {
    id: '2',
    name: 'Sarah Chen',
    email: 'sarah@heybirdy.com',
    roles: ['affiliate', 'member'],
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    points: 1200,
    badges: ['Super Affiliate']
  }
];

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }

    const payload = await verifyJWT(token);
    const user = MOCK_USERS.find(u => u.id === payload.userId);

    if (!user) {
      // In a real app, this might happen if the user was deleted but token is still valid
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Auth me error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
