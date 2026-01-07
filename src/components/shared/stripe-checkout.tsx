'use client'

import { useState } from 'react'
import { CreditCard, Loader2, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface StripeCheckoutProps {
  amount: number
  currency?: string
  productName: string
  onSuccess?: () => void
}

export function StripeCheckout({ amount, currency = 'USD', productName, onSuccess }: StripeCheckoutProps) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    
    try {
      // Simulate Stripe checkout redirect or Elements mounting
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In a real app:
      // 1. Create Checkout Session on backend
      // 2. Redirect to Stripe or open modal
      
      onSuccess?.()
      alert('Checkout simulation complete!')
    } catch (error) {
      console.error('Checkout failed:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-primary" />
          Secure Checkout
        </CardTitle>
        <CardDescription>
          Complete your purchase for {productName}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center py-2 border-b">
          <span className="text-muted-foreground">Item</span>
          <span className="font-medium">{productName}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b">
          <span className="text-muted-foreground">Amount</span>
          <span className="text-xl font-bold">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted p-3 rounded-md">
          <ShieldCheck className="w-4 h-4 text-green-600" />
          Payments are secure and encrypted. Powered by Stripe.
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          size="lg" 
          onClick={handleCheckout} 
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            `Pay ${new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount)}`
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
