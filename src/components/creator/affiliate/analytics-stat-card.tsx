import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AnalyticsStatCardProps {
  title: string
  value: string
  change: string
  trend: string
  icon: LucideIcon
  color: string
  bg: string
}

export function AnalyticsStatCard({ title, value, change, trend, icon: Icon, color, bg }: AnalyticsStatCardProps) {
  return (
    <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2rem] bg-white overflow-hidden group">
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-4">
          <div className={`h-12 w-12 rounded-2xl ${bg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>
          <Badge className={`
            ${trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'} 
            border-none font-black text-[10px] px-2 py-1 rounded-lg
          `}>
            {change}
          </Badge>
        </div>
        <div>
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{title}</p>
          <h3 className="text-2xl font-black text-slate-900">{value}</h3>
        </div>
      </CardContent>
    </Card>
  )
}
