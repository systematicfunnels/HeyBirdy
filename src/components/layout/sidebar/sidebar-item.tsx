"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils/helpers'
import { Badge } from '@/components/ui/badge'

export interface SidebarItemProps {
  name: string
  href: string
  icon: LucideIcon
  badge?: string
}

export function SidebarItem({ name, href, icon: Icon, badge }: SidebarItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300",
        isActive 
          ? "bg-primary text-white shadow-lg shadow-primary/25 translate-x-1" 
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
      )}
    >
      <div className="flex items-center gap-3">
        <Icon className={cn(
          "h-5 w-5 transition-transform duration-300 group-hover:scale-110",
          isActive ? "text-white" : "text-slate-400 group-hover:text-primary"
        )} />
        <span className="text-sm font-bold tracking-tight">{name}</span>
      </div>
      {badge && (
        <Badge className={cn(
          "px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-widest border-none",
          isActive ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
        )}>
          {badge}
        </Badge>
      )}
    </Link>
  )
}
