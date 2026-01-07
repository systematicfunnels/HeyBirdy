import { NextResponse } from 'next/server';
import { signJWT } from '@/lib/auth/session';
import { cookies } from 'next/headers';

// Mock users database
const MOCK_USERS = [
  {
    id: '1',
    name: 'Alex Rivera',
    email: 'alex@heybirdy.com',
    password: 'password123',
    roles: ['creator', 'member'],
    avatar: 'https://i.pravatar.cc/150?u=alex',
    points: 2450,
    badges: ['Early Bird', 'Top Creator']
  },
  {
    id: '2',
    name: 'Sarah Chen',
    email: 'sarah@heybirdy.com',
    password: 'password123',
    roles: ['affiliate', 'member'],
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    points: 1200,
    badges: ['Super Affiliate']
  }
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Find user
    const user = MOCK_USERS.find(u => u.email === email && u.password === password);

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Generate token
    const token = await signJWT({
      userId: user.id,
      roles: user.roles,
    });

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });

    // Remove password from user object
    const { password: _password, ...userWithoutPassword } = user;
    void _password; // Silence unused var warning

    return NextResponse.json({
      user: userWithoutPassword,
      access_token: token,
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
