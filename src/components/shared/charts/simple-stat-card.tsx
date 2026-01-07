import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import { TrendIndicator } from "./trend-indicator"
import { cn } from "@/lib/utils/helpers"

interface SimpleStatCardProps {
  title: string
  value: string | number
  trendValue?: string | number
  trend?: "up" | "down" | "neutral"
  icon?: LucideIcon
  description?: string
  className?: string
  iconClassName?: string
}

export function SimpleStatCard({
  title,
  value,
  trendValue,
  trend,
  icon: Icon,
  description,
  className,
  iconClassName
}: SimpleStatCardProps) {
  return (
    <Card className={cn("border-none shadow-sm bg-white hover:shadow-md transition-shadow", className)}>
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          {title}
        </CardTitle>
        {Icon && (
          <div className={cn("h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400", iconClassName)}>
            <Icon className="h-4 w-4" />
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-black text-slate-900 tracking-tight">{value}</div>
        <div className="flex items-center gap-2 mt-2">
          {trend && trendValue && (
            <TrendIndicator value={trendValue} trend={trend} />
          )}
          {description && (
            <p className="text-xs text-slate-500 font-medium">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
