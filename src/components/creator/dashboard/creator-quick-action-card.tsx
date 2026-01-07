"use client"

import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export interface CreatorQuickAction {
  name: string
  href: string
  icon: LucideIcon
  color: string
  bg: string
}

interface CreatorQuickActionCardProps {
  action: CreatorQuickAction
}

export function CreatorQuickActionCard({ action }: CreatorQuickActionCardProps) {
  return (
    <Link href={action.href}>
      <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2rem] bg-white group cursor-pointer text-center p-6 h-full flex flex-col items-center justify-center gap-4 border border-transparent hover:border-primary/20">
        <div className={`h-14 w-14 rounded-2xl ${action.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
          <action.icon className={`h-7 w-7 ${action.color}`} />
        </div>
        <span className="text-xs font-black text-slate-900 uppercase tracking-widest">{action.name}</span>
      </Card>
    </Link>
  )
}
