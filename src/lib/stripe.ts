import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  // We'll use a placeholder for development if the key isn't set
  console.warn('STRIPE_SECRET_KEY is not defined in environment variables');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2025-12-15.clover',
  typescript: true,
});
