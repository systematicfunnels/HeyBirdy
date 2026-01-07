"use client"

import { Copy, Percent, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface PromoCode {
  id: string
  code: string
  discount: string
  program: string
  usage: number
  savings?: string
  status: string
  expiry: string
  performance?: string
}

interface PromoCodeCardProps {
  promo: PromoCode
}

export function PromoCodeCard({ promo }: PromoCodeCardProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(promo.code)
    // Note: You might want to add a toast notification here
  }

  return (
    <Card className={`relative overflow-hidden group border-slate-200/60 hover:shadow-xl hover:border-primary/20 transition-all duration-300 ${promo.status === 'Expired' ? 'opacity-60 grayscale' : ''}`}>
      {promo.status === 'Active' && (
        <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden">
          <div className="absolute top-3 -right-6 bg-primary text-primary-foreground text-[8px] font-black py-1 px-8 rotate-45 uppercase tracking-tighter">
            Active
          </div>
        </div>
      )}
      <CardHeader className="pb-4">
        <Badge variant="secondary" className="w-fit mb-3 text-[10px] font-bold bg-slate-100 text-slate-500 border-none uppercase tracking-wider">{promo.program}</Badge>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="text-3xl font-black tracking-tighter text-slate-900 group-hover:text-primary transition-colors">{promo.code}</CardTitle>
            <div className="flex items-center gap-2">
               <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Percent className="h-3 w-3 text-green-600" />
               </div>
               <CardDescription className="text-sm font-black text-green-600">
                 {promo.discount}
               </CardDescription>
            </div>
          </div>
          <Button 
            variant="outline" 
            size="icon" 
            className="h-12 w-12 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all shadow-sm"
            onClick={copyToClipboard}
          >
            <Copy className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-5 pt-5 border-t border-slate-100 mt-2">
        <div className="grid grid-cols-2 gap-4">
           <div className="space-y-1">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Usages</p>
              <div className="flex items-center gap-2">
                <p className="text-lg font-black text-slate-800">{promo.usage.toLocaleString()}</p>
                {promo.performance && (
                  <span className="text-[10px] font-bold text-green-500 bg-green-50 px-1.5 py-0.5 rounded">
                    {promo.performance}
                  </span>
                )}
              </div>
           </div>
           {promo.savings && (
             <div className="space-y-1 text-right">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Total Savings</p>
                <p className="text-lg font-black text-slate-800">{promo.savings}</p>
             </div>
           )}
        </div>
        <div className="flex items-center justify-between pt-2">
           <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <Clock className="h-3.5 w-3.5 text-slate-400" /> {promo.expiry}
           </span>
           {promo.status === 'Active' ? (
             <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-none font-bold text-[10px]">LIVE</Badge>
           ) : (
             <Badge variant="destructive" className="font-bold text-[10px]">EXPIRED</Badge>
           )}
        </div>
      </CardContent>
    </Card>
  )
}
