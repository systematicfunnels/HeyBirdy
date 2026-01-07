import { NextResponse } from 'next/server';
import { signJWT } from '@/lib/auth/session';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // In a real app, you would:
    // 1. Validate inputs
    // 2. Check if user already exists
    // 3. Hash the password
    // 4. Save to database

    // Mock successful registration
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: name || email.split('@')[0],
      email,
      roles: ['member'],
      points: 100, // Welcome bonus
      badges: ['New Birdy']
    };

    // Generate token
    const token = await signJWT({
      userId: newUser.id,
      roles: newUser.roles,
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

    return NextResponse.json({
      user: newUser,
      access_token: token,
    }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
