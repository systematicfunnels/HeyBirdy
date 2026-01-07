import { ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils/helpers'

interface SidebarTierCardProps {
  tierName: string
  mainValue: string
  mainLabel: string
  growthValue: string
  growthLabel: string
  gradient?: string
}

export function SidebarTierCard({
  tierName,
  mainValue,
  mainLabel,
  growthValue,
  growthLabel,
  gradient = "from-[#0f172a] to-[#1e293b]"
}: SidebarTierCardProps) {
  return (
    <div className={cn(
      "bg-gradient-to-br rounded-2xl p-5 text-white shadow-xl shadow-slate-200/50 relative overflow-hidden group",
      gradient
    )}>
      <div className="absolute -top-6 -right-6 h-20 w-20 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors" />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-6 w-6 rounded-lg bg-primary/20 flex items-center justify-center">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{tierName}</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-black tracking-tighter text-white">{mainValue}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{mainLabel}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-black text-primary">{growthValue}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{growthLabel}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
