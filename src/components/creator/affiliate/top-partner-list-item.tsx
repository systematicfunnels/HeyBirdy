import { ChevronRight } from "lucide-react"

export interface TopPartner {
  name: string
  sales: number
  revenue: string
  avatar: string
}

interface TopPartnerListItemProps {
  partner: TopPartner
}

export function TopPartnerListItem({ partner }: TopPartnerListItemProps) {
  return (
    <div className="flex items-center justify-between group cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-2xl overflow-hidden border-2 border-slate-50 group-hover:border-primary/20 transition-all duration-300">
          <img src={partner.avatar} alt={partner.name} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-black text-slate-900">{partner.name}</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{partner.sales} Sales</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-black text-primary">{partner.revenue}</p>
        <ChevronRight className="h-4 w-4 text-slate-300 ml-auto transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  )
}
