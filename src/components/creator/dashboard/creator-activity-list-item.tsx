"use client"

import { LucideIcon } from "lucide-react"

export interface CreatorActivity {
  id: number | string
  type: string
  title: string
  desc: string
  time: string
  icon: LucideIcon
}

interface CreatorActivityListItemProps {
  activity: CreatorActivity
}

export function CreatorActivityListItem({ activity }: CreatorActivityListItemProps) {
  return (
    <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-500 group">
      <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-primary/10 transition-colors">
        <activity.icon className="h-6 w-6 text-slate-400 group-hover:text-primary transition-colors" />
      </div>
      <div className="flex-1">
        <p className="text-lg font-black text-slate-900">{activity.title}</p>
        <p className="text-sm font-bold text-slate-500">{activity.desc}</p>
      </div>
      <div className="text-right">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{activity.time}</p>
      </div>
    </div>
  )
}
