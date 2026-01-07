"use client"

import { LucideIcon } from "lucide-react"

export interface CreatorRecommendation {
  title: string
  desc: string
  icon: LucideIcon
}

interface CreatorRecommendationCardProps {
  recommendation: CreatorRecommendation
}

export function CreatorRecommendationCard({ recommendation }: CreatorRecommendationCardProps) {
  return (
    <div className="space-y-3 p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-500 group cursor-pointer">
      <div className="flex items-center gap-3">
        <recommendation.icon className="h-5 w-5 text-primary" />
        <p className="text-sm font-black text-slate-900 group-hover:text-primary transition-colors">{recommendation.title}</p>
      </div>
      <p className="text-xs font-medium text-slate-500 leading-relaxed">{recommendation.desc}</p>
    </div>
  )
}
