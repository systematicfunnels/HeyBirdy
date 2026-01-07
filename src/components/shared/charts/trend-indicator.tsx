import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils/helpers"

interface TrendIndicatorProps {
  value: string | number
  trend: "up" | "down" | "neutral"
  className?: string
  showIcon?: boolean
}

export function TrendIndicator({ 
  value, 
  trend, 
  className, 
  showIcon = true 
}: TrendIndicatorProps) {
  const isUp = trend === "up"
  const isDown = trend === "down"

  return (
    <div className={cn(
      "flex items-center gap-1 text-xs font-bold",
      isUp ? "text-green-500" : isDown ? "text-red-500" : "text-slate-500",
      className
    )}>
      {showIcon && (
        isUp ? <TrendingUp className="h-3 w-3" /> : isDown ? <TrendingDown className="h-3 w-3" /> : null
      )}
      <span>{value}</span>
    </div>
  )
}
