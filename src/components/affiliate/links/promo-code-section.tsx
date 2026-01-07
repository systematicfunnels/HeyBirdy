import { Ticket, Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PromoCodeCard, type PromoCode } from "./promo-code-card"

const PROMO_CODES: PromoCode[] = [
  {
    id: "pc1",
    code: "ALEX25",
    discount: "25% OFF",
    program: "Elite Gaming Gear",
    usage: 145,
    savings: "$1,245",
    status: "Active",
    expiry: "Dec 2026",
    performance: "+18%"
  },
  {
    id: "pc2",
    code: "HEYBIRDY10",
    discount: "10% OFF",
    program: "Full-Stack Bootcamp",
    usage: 89,
    savings: "$540",
    status: "Active",
    expiry: "Ongoing",
    performance: "+5%"
  }
]

export function PromoCodeSection() {
  return (
    <div className="space-y-10 pt-12 border-t border-slate-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-orange-500 flex items-center justify-center shadow-xl shadow-orange-100">
            <Ticket className="h-7 w-7 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Active Promo Codes</h2>
            <p className="text-slate-500 font-medium">Boost conversions with these exclusive creator discounts.</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative w-full sm:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
            <Input placeholder="Search promo codes..." className="pl-12 h-14 bg-white border-slate-200 rounded-2xl shadow-sm focus:ring-orange-500 font-medium" />
          </div>
          <Button size="lg" className="h-14 px-8 rounded-2xl font-bold bg-orange-500 hover:bg-orange-600 shadow-xl shadow-orange-200 group">
            <Plus className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform" /> New Code
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROMO_CODES.map((promo) => (
          <PromoCodeCard key={promo.id} promo={promo} />
        ))}
      </div>
    </div>
  )
}
