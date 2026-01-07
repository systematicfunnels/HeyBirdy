import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = await headers();
  const sig = headersList.get('stripe-signature');

  let event: Stripe.Event;

  try {
    if (!sig || !endpointSecret) {
      // In development without a secret, we can skip signature verification
      // BUT for security, we should log it and proceed with caution
      console.warn('Webhook warning: Missing stripe-signature or STRIPE_WEBHOOK_SECRET');
      event = JSON.parse(body);
    } else {
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    }
  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err));
    console.error(`Webhook Error: ${error.message}`);
    return NextResponse.json({ error: `Webhook Error: ${error.message}` }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      console.log(`💰 Payment successful for session: ${session.id}`);
      // TODO: Update user subscription/points in database
      break;
    
    case 'invoice.payment_succeeded':
      const invoice = event.data.object as Stripe.Invoice;
      console.log(`✅ Invoice paid: ${invoice.id}`);
      // TODO: Handle recurring payment success
      break;

    case 'customer.subscription.deleted':
      const subscription = event.data.object as Stripe.Subscription;
      console.log(`❌ Subscription cancelled: ${subscription.id}`);
      // TODO: Revoke access or downgrade user
      break;

    case 'charge.refunded':
      const charge = event.data.object as Stripe.Charge;
      console.log(`🔙 Charge refunded: ${charge.id}`);
      // TODO: Handle refund logic
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
