import { LucideIcon } from "lucide-react"

interface NetworkStatCardProps {
  label: string
  value: string
  icon: LucideIcon
  color: string
  bg: string
}

export function NetworkStatCard({ label, value, icon: Icon, color, bg }: NetworkStatCardProps) {
  return (
    <div className="p-6 rounded-[2rem] bg-white shadow-sm border border-slate-50 flex items-center gap-4 group hover:shadow-md transition-all">
      <div className={`h-12 w-12 rounded-2xl ${bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <Icon className={`h-6 w-6 ${color}`} />
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
        <p className="text-xl font-black text-slate-900">{value}</p>
      </div>
    </div>
  )
}
