"use client"

import { Zap, Target, Users } from "lucide-react"
import Link from "next/link"
import { ROUTES } from "@/lib/constants/routes"
import Image from "next/image"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side: Brand & Visuals */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -ml-48 -mb-48" />
        
        <div className="relative z-10">
          <Link href={ROUTES.HOME} className="flex items-center gap-2 mb-12">
            <span className="text-3xl font-black tracking-tighter text-primary">HeyBirdy</span>
          </Link>
          
          <div className="space-y-12 max-w-lg">
            <h1 className="text-6xl font-black leading-tight tracking-tight">
              Scale your <span className="text-primary">influence</span> and earnings.
            </h1>
            
            <div className="space-y-6">
              {[
                { icon: Zap, title: "Gamified Growth", desc: "Level up your creator journey with XP, badges, and rewards." },
                { icon: Target, title: "Precision Analytics", desc: "Deep dive into your performance with real-time data." },
                { icon: Users, title: "Thriving Community", desc: "Connect with like-minded creators and build together." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative z-10 pt-12 border-t border-white/10 flex items-center justify-between">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative h-10 w-10 rounded-full border-2 border-slate-900 overflow-hidden">
                <Image src={`https://i.pravatar.cc/100?u=user${i}`} alt="User" fill className="object-cover" />
              </div>
            ))}
            <div className="h-10 w-10 rounded-full border-2 border-slate-900 bg-primary flex items-center justify-center text-[10px] font-black">
              +12K
            </div>
          </div>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            Trusted by 12,000+ Creators
          </p>
        </div>
      </div>

      {/* Right Side: Auth Forms */}
      <div className="flex flex-col justify-center items-center p-8 bg-background relative">
        <div className="lg:hidden absolute top-8 left-8">
          <Link href={ROUTES.HOME} className="text-2xl font-black tracking-tighter text-primary">
            HeyBirdy
          </Link>
        </div>
        
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  )
}
