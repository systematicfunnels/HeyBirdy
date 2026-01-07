"use client"

import { 
  TrendingUp, 
  TrendingDown, 
  LucideIcon 
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils/helpers"

interface StatCardProps {
  title: string
  value: string
  change?: string
  trend?: 'up' | 'down'
  icon: LucideIcon
  description?: string
  color?: 'primary' | 'blue' | 'green' | 'orange' | 'purple'
  className?: string
}

export function StatCard({ 
  title, 
  value, 
  change, 
  trend, 
  icon: Icon, 
  description,
  color = 'primary',
  className
}: StatCardProps) {
  const colorMap = {
    primary: "text-primary bg-primary/10",
    blue: "text-blue-500 bg-blue-500/10",
    green: "text-green-500 bg-green-500/10",
    orange: "text-orange-500 bg-orange-500/10",
    purple: "text-purple-500 bg-purple-500/10",
  }

  return (
    <Card className={cn("group hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] transition-all duration-700 border-none shadow-[0_32px_64px_-15px_rgba(0,0,0,0.08)] rounded-[2.5rem] bg-white overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-4 space-y-0 p-8">
        <CardTitle className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
          {title}
        </CardTitle>
        <div className={cn("h-12 w-12 rounded-[1.25rem] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6", colorMap[color])}>
          <Icon className="h-6 w-6" />
        </div>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        <div className="text-4xl font-black text-slate-900 tracking-tight mb-2 group-hover:text-primary transition-colors">{value}</div>
        <div className="flex items-center gap-3">
          {change && (
            <div className={cn(
              "flex items-center gap-1 text-[10px] font-black px-3 py-1 rounded-full",
              trend === 'up' ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
            )}>
              {trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {change}
            </div>
          )}
          {description && (
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

interface EarningOverviewCardProps {
  label: string
  value: string
  trend: string
  icon: LucideIcon
  color: string
  bg: string
  className?: string
}

export function EarningOverviewCard({ 
  label, 
  value, 
  trend, 
  icon: Icon, 
  color, 
  bg,
  className 
}: EarningOverviewCardProps) {
  return (
    <Card className={cn("border-none shadow-[0_32px_64px_-15px_rgba(0,0,0,0.08)] rounded-[2.5rem] overflow-hidden group hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] transition-all duration-700", className)}>
      <CardContent className="p-10">
        <div className="flex items-center justify-between mb-8">
          <div className={cn("h-16 w-16 rounded-[1.5rem] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg", bg)}>
            <Icon className={cn("h-8 w-8", color)} />
          </div>
          <Badge variant="secondary" className="bg-slate-100 text-slate-500 border-none font-black text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-xl">
            {trend}
          </Badge>
        </div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{label}</p>
        <h3 className="text-4xl font-black text-slate-900 tracking-tight group-hover:text-primary transition-colors">{value}</h3>
      </CardContent>
    </Card>
  )
}

interface PayoutProgressProps {
  current: number
  target: number
  nextReward: string
  className?: string
}

export function PayoutProgress({ current, target, nextReward, className }: PayoutProgressProps) {
  const percentage = Math.min(Math.round((current / target) * 100), 100)
  
  return (
    <Card className={cn("bg-slate-900 border-none shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] rounded-[2.5rem] overflow-hidden text-white relative group", className)}>
      <div className="absolute top-0 right-0 p-8 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
        <TrendingUp className="h-64 w-64" />
      </div>
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-colors duration-700" />
      
      <CardHeader className="p-10 pb-6 relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Next Milestone</span>
        </div>
        <CardTitle className="text-2xl font-black tracking-tight">Earnings Goal</CardTitle>
        <CardDescription className="text-slate-400 font-medium text-base">Reach ${target.toLocaleString()} to unlock Platinum perks.</CardDescription>
      </CardHeader>
      <CardContent className="p-10 pt-0 space-y-8 relative z-10">
        <div className="space-y-3">
          <div className="flex justify-between text-xs font-black uppercase tracking-widest">
            <span className="text-slate-400">Current Progress</span>
            <span className="text-primary">{percentage}%</span>
          </div>
          <Progress value={percentage} className="h-3 bg-white/5" />
        </div>
        <div className="flex items-center gap-5 bg-white/5 rounded-[1.5rem] p-6 backdrop-blur-md border border-white/5 group-hover:bg-white/10 transition-colors duration-500">
          <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center shadow-lg">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Upcoming Reward</p>
            <p className="text-base font-black text-white">{nextReward}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
