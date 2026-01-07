"use client"

import Link from 'next/link'
import { User } from '@/types/user.types'
import { Bell, Search, Settings, LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export interface BaseHeaderProps {
  user?: User | null
  logo: LucideIcon
  title: string
  subtitle: string
  dashboardHref: string
  searchPlaceholder: string
  badgeText: string
  userTypeLabel: string
}

export function BaseHeader({
  user,
  logo: Logo,
  title,
  subtitle,
  dashboardHref,
  searchPlaceholder,
  badgeText,
  userTypeLabel
}: BaseHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl border-slate-200/60">
      <div className="container mx-auto px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={dashboardHref} className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 bg-slate-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Logo className="h-5 w-5 text-primary fill-primary" />
            </div>
            <span className="font-black text-xl tracking-tighter text-slate-900">
              {title} <span className="text-primary italic">{subtitle}</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center bg-slate-100/50 border border-slate-200/60 rounded-xl px-3 py-1.5 w-80 group focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <Search className="h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder={searchPlaceholder}
              className="bg-transparent border-none focus:ring-0 text-sm font-medium w-full ml-2 text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 mr-4 hidden sm:flex">
             <Badge className="bg-primary/10 text-primary border-none font-bold text-[10px] px-2 py-0.5">
               {badgeText}
             </Badge>
          </div>

          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-slate-100 text-slate-500 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2.5 right-2.5 h-2 w-2 bg-red-500 rounded-full border-2 border-white" />
          </Button>
          
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-slate-100 text-slate-500">
            <Settings className="h-5 w-5" />
          </Button>

          <div className="h-6 w-px bg-slate-200 mx-2" />

          {user ? (
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-900 leading-none mb-1">{user.name}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{userTypeLabel}</p>
              </div>
              <Avatar className="h-10 w-10 border-2 border-slate-100 shadow-sm ring-2 ring-transparent hover:ring-primary/20 transition-all cursor-pointer">
                <AvatarImage src={`https://i.pravatar.cc/150?u=${user.id}`} />
                <AvatarFallback className="bg-primary/10 text-primary font-bold">
                  {user.name[0]}
                </AvatarFallback>
              </Avatar>
            </div>
          ) : (
            <Button className="rounded-xl font-bold px-6" asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
