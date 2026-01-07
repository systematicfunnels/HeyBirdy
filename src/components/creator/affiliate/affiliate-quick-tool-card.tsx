import { LucideIcon, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface AffiliateQuickToolCardProps {
  title: string
  desc: string
  icon: LucideIcon
  color: string
  bg: string
}

export function AffiliateQuickToolCard({ title, desc, icon: Icon, color, bg }: AffiliateQuickToolCardProps) {
  return (
    <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2rem] bg-white group cursor-pointer">
      <CardContent className="p-8">
        <div className={`h-12 w-12 rounded-2xl ${bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
        <h3 className="text-lg font-black text-slate-900 mb-2">{title}</h3>
        <p className="text-xs font-medium text-slate-500 leading-relaxed mb-6">{desc}</p>
        <div className="flex items-center text-xs font-black text-primary uppercase tracking-widest gap-2">
          Launch Tool <ExternalLink className="h-3 w-3" />
        </div>
      </CardContent>
    </Card>
  )
}
