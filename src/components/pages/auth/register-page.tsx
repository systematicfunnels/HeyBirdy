"use client"

import { useState } from "react"
import { Mail, Lock, User, Eye, EyeOff, Loader2, ArrowRight, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ROUTES } from "@/lib/constants/routes"
import { useAuthStore } from "@/store/auth.store"
import { useRouter } from "next/navigation"

export function RegisterPage() {
  const { register, isLoading } = useAuthStore()
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const formData = new FormData(e.currentTarget)
    const name = formData.get('fullname') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      await register({ name, email, password })
      router.push(ROUTES.MEMBER.FEED)
    } catch (err) {
      let errorMessage = 'Registration failed. Please try again.';
      if (err && typeof err === 'object' && 'response' in err) {
        const axiosError = err as { response?: { data?: { message?: string } } };
        errorMessage = axiosError.response?.data?.message || errorMessage;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }
      setError(errorMessage)
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-2 text-center lg:text-left">
        <h2 className="text-3xl font-black tracking-tight text-slate-900">Join HeyBirdy</h2>
        <p className="text-slate-500 font-medium">Start your journey and unlock your full potential.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 rounded-2xl bg-destructive/10 text-destructive text-sm font-bold animate-in fade-in slide-in-from-top-1">
            {error}
          </div>
        )}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullname" className="font-bold text-xs uppercase tracking-widest text-slate-400">
              Full Name
            </Label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
              <Input 
                id="fullname" 
                name="fullname"
                type="text" 
                placeholder="Alex Rivera" 
                className="pl-12 h-14 rounded-2xl bg-slate-50 border-none focus-visible:ring-primary font-medium"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-bold text-xs uppercase tracking-widest text-slate-400">
              Email Address
            </Label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
              <Input 
                id="email" 
                name="email"
                type="email" 
                placeholder="alex@example.com" 
                className="pl-12 h-14 rounded-2xl bg-slate-50 border-none focus-visible:ring-primary font-medium"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="font-bold text-xs uppercase tracking-widest text-slate-400">
              Password
            </Label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
              <Input 
                id="password" 
                name="password"
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="pl-12 pr-12 h-14 rounded-2xl bg-slate-50 border-none focus-visible:ring-primary font-medium"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-slate-500 leading-relaxed">
              By creating an account, you agree to our{" "}
              <Link href={ROUTES.LEGAL} className="font-bold text-slate-900 hover:underline">Terms of Service</Link>
              {" "}and{" "}
              <Link href={ROUTES.LEGAL} className="font-bold text-slate-900 hover:underline">Privacy Policy</Link>.
            </p>
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
                Create Account <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </div>
      </form>

      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-100"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase font-black tracking-widest">
          <span className="bg-background px-4 text-slate-400">Or sign up with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-14 rounded-2xl font-bold border-slate-200">
          <Image src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width={20} height={20} className="mr-2" />
          Google
        </Button>
        <Button variant="outline" className="h-14 rounded-2xl font-bold border-slate-200">
          <Image src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt="Twitter" width={20} height={20} className="mr-2" />
          Twitter
        </Button>
      </div>

      <p className="text-center text-sm font-medium text-slate-500">
        Already have an account?{" "}
        <Link href={ROUTES.LOGIN} className="font-bold text-primary hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  )
}
