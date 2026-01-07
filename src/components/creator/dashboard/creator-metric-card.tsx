"use client"

import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export interface CreatorMetric {
  title: string
  value: string
  change: string
  trend: string
  icon: LucideIcon
}

interface CreatorMetricCardProps {
  metric: CreatorMetric
}

export function CreatorMetricCard({ metric }: CreatorMetricCardProps) {
  return (
    <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] bg-white group overflow-hidden">
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500">
            <metric.icon className="h-6 w-6 text-slate-400 group-hover:text-primary transition-colors duration-500" />
          </div>
          <Badge className="bg-green-100 text-green-600 border-none font-bold text-[10px] uppercase tracking-widest">
            {metric.change}
          </Badge>
        </div>
        <div className="space-y-1">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{metric.title}</p>
          <p className="text-3xl font-black text-slate-900">{metric.value}</p>
        </div>
      </CardContent>
    </Card>
  )
}
