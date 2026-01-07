import { Coins } from "lucide-react"
import { cn } from "@/lib/utils/helpers"

interface PointsDisplayProps {
  points: number | string
  label?: string
  size?: "sm" | "md" | "lg"
  className?: string
  showIcon?: boolean
}

export function PointsDisplay({
  points,
  label = "points",
  size = "md",
  className,
  showIcon = true
}: PointsDisplayProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center gap-1.5">
        {showIcon && (
          <div className={cn(
            "rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600",
            size === "sm" ? "h-4 w-4" : size === "md" ? "h-6 w-6" : "h-8 w-8"
          )}>
            <Coins className={size === "sm" ? "h-2.5 w-2.5" : size === "md" ? "h-3.5 w-3.5" : "h-5 w-5"} />
          </div>
        )}
        <span className={cn(
          "font-black text-slate-900 leading-none",
          size === "sm" ? "text-base" : size === "md" ? "text-2xl" : "text-4xl"
        )}>
          {points}
        </span>
      </div>
      {label && (
        <p className={cn(
          "font-bold text-slate-400 uppercase tracking-widest mt-1",
          size === "sm" ? "text-[8px]" : size === "md" ? "text-[10px]" : "text-xs"
        )}>
          {label}
        </p>
      )}
    </div>
  )
}
