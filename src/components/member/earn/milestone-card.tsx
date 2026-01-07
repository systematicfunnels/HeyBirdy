"use client"

import { Award, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export interface Milestone {
  id: string
  title: string
  reward: string
  points: number
  status: string
  progress?: number
}

interface MilestoneCardProps {
  milestone: Milestone
}

export function MilestoneCard({ milestone: m }: MilestoneCardProps) {
  return (
    <div className="flex items-start gap-6 relative group">
      <div className="relative z-10">
        <div className={`h-14 w-14 rounded-2xl flex items-center justify-center shadow-lg ${
          m.status === 'Completed' ? 'bg-yellow-400 text-white' : 
          m.status === 'In Progress' ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400'
        }`}>
          <Award className="h-8 w-8" />
        </div>
        {m.status === 'Completed' && (
          <div className="absolute -top-1 -right-1 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
            <CheckCircle2 className="h-3 w-3 text-white" />
          </div>
        )}
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <h4 className="font-black text-lg text-slate-900">{m.title}</h4>
          <Badge className={`${
            m.status === 'Completed' ? 'bg-green-100 text-green-600' : 
            m.status === 'In Progress' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
          } border-none font-black text-[10px] uppercase tracking-widest`}>
            {m.status}
          </Badge>
        </div>
        <p className="text-sm font-bold text-slate-500">Reward: <span className="text-primary">{m.reward}</span> • {m.points} pts</p>
        {m.progress !== undefined && (
          <div className="pt-2">
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: `${m.progress}%` }} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
