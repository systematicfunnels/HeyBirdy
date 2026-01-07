import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils/helpers"
import { LucideIcon } from "lucide-react"

export type BadgeTier = "Diamond" | "Gold" | "Silver" | "Bronze" | "Member" | "Newbie"

interface GamifiedBadgeProps {
  tier: BadgeTier
  icon?: LucideIcon
  className?: string
  size?: "sm" | "md" | "lg"
}

const TIER_CONFIG: Record<BadgeTier, { color: string; label: string }> = {
  Diamond: { color: "bg-blue-100 text-blue-600", label: "Diamond" },
  Gold: { color: "bg-yellow-100 text-yellow-600", label: "Gold" },
  Silver: { color: "bg-slate-200 text-slate-600", label: "Silver" },
  Bronze: { color: "bg-orange-100 text-orange-600", label: "Bronze" },
  Member: { color: "bg-slate-100 text-slate-600", label: "Member" },
  Newbie: { color: "bg-green-100 text-green-600", label: "Newbie" },
}

export function GamifiedBadge({ 
  tier, 
  icon: Icon, 
  className,
  size = "md"
}: GamifiedBadgeProps) {
  const config = TIER_CONFIG[tier] || TIER_CONFIG.Member

  return (
    <Badge className={cn(
      "border-none font-bold uppercase tracking-widest rounded-lg",
      config.color,
      size === "sm" ? "text-[8px] px-1.5 py-0" : 
      size === "md" ? "text-[9px] px-2 py-0.5" : "text-[10px] px-3 py-1",
      className
    )}>
      {Icon && <Icon className={cn(
        "mr-1",
        size === "sm" ? "h-2 w-2" : size === "md" ? "h-2.5 w-2.5" : "h-3 w-3"
      )} />}
      {config.label}
    </Badge>
  )
}
