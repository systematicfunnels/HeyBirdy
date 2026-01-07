"use client"

import { useState } from "react"
import { Mail, Loader2, ArrowRight, ChevronLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ROUTES } from "@/lib/constants/routes"

export function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate send reset email
    setTimeout(() => {
      setIsLoading(false)
      setIsSent(true)
    }, 2000)
  }

  if (isSent) {
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 text-center">
        <div className="h-20 w-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-10 w-10 text-primary" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">Check your email</h2>
          <p className="text-slate-500 font-medium">
            We&apos;ve sent password reset instructions to your email address.
          </p>
        </div>
        <Button 
          asChild
          variant="outline"
          className="w-full h-14 rounded-2xl font-black text-lg border-slate-200"
        >
          <Link href={ROUTES.LOGIN}>
            Back to Sign In
          </Link>
        </Button>
        <p className="text-sm font-medium text-slate-500">
          Didn&apos;t receive the email?{" "}
          <button 
            onClick={() => setIsSent(false)}
            className="font-bold text-primary hover:underline"
          >
            Try again
          </button>
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-2 text-center lg:text-left">
        <Link 
          href={ROUTES.LOGIN} 
          className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-primary transition-colors mb-4 group"
        >
          <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Sign In
        </Link>
        <h2 className="text-3xl font-black tracking-tight text-slate-900">Reset Password</h2>
        <p className="text-slate-500 font-medium">Enter your email and we&apos;ll send you instructions to reset your password.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="font-bold text-xs uppercase tracking-widest text-slate-400">
            Email Address
          </Label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
            <Input 
              id="email" 
              type="email" 
              placeholder="alex@example.com" 
              className="pl-12 h-14 rounded-2xl bg-slate-50 border-none focus-visible:ring-primary font-medium"
              required
            />
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full h-14 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 group"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              Send Instructions <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
