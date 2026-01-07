export interface JWTPayload {
  userId: string;
  roles: string[];
  exp: number;
}

/**
 * Signs a JWT token with the provided payload.
 * In a real app, use 'jose' or 'jsonwebtoken' with a secret key.
 */
export async function signJWT(payload: Partial<JWTPayload>): Promise<string> {
  const header = { alg: 'HS256', typ: 'JWT' };
  const fullPayload = {
    ...payload,
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24), // 24 hours
  };

  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(fullPayload));
  const signature = 'mock-signature'; // Placeholder signature

  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

/**
 * Verifies a JWT token and returns the payload.
 * In a real app, use 'jose' or 'jsonwebtoken' with a secret key.
 */
export async function verifyJWT(token: string): Promise<JWTPayload> {
  // This is a placeholder. In production, verify the signature.
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid token format');
    }
    
    const payload = JSON.parse(atob(parts[1]));
    return payload as JWTPayload;
  } catch {
    throw new Error('Invalid token');
  }
}
