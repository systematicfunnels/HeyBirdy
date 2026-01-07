"use client"

import { 
  Tag, 
  Zap, 
  Check, 
  Plus, 
  Settings2, 
  Target,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const TIERS = [
  { name: "Basic", price: "$4.99", color: "bg-slate-100", textColor: "text-slate-600", features: ["Ad-free viewing", "Custom badges", "Basic emotes"] },
  { name: "Pro", price: "$9.99", color: "bg-primary/10", textColor: "text-primary", features: ["All Basic features", "Exclusive content", "Priority chat", "Custom roles"], popular: true },
  { name: "Elite", price: "$24.99", color: "bg-slate-900", textColor: "text-white", features: ["All Pro features", "Direct messages", "Monthly shoutout", "VVIP status"] },
]

export function CreatorMonetizationPricingPage() {
  return (
    <div className="space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-2xl shadow-slate-200">
            <Tag className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">Subscription Tiers</h1>
            <p className="text-slate-500 font-medium text-sm">Manage your membership pricing and perks</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-xl font-bold border-slate-200">
            <Settings2 className="h-4 w-4 mr-2" /> Global Settings
          </Button>
          <Button className="h-12 px-6 rounded-xl font-bold shadow-xl shadow-primary/20">
            <Plus className="h-4 w-4 mr-2" /> Create Tier
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {TIERS.map((tier) => (
          <Card key={tier.name} className={`border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] bg-white overflow-hidden relative group ${tier.popular ? 'ring-2 ring-primary ring-offset-4' : ''}`}>
            {tier.popular && (
              <div className="absolute top-6 right-6">
                <Badge className="bg-primary text-white border-none font-black text-[10px] uppercase tracking-widest px-3 py-1 shadow-lg shadow-primary/20">Most Popular</Badge>
              </div>
            )}
            <CardContent className="p-10">
              <div className={`h-16 w-16 rounded-2xl ${tier.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <Zap className={`h-8 w-8 ${tier.name === 'Elite' ? 'text-white' : 'text-primary'}`} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-slate-900">{tier.price}</span>
                <span className="text-slate-400 font-bold text-sm">/month</span>
              </div>
              <div className="space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className={`w-full h-14 rounded-2xl font-black text-sm uppercase tracking-widest ${
                tier.name === 'Elite' ? 'bg-slate-900 text-white' : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
              } border-none transition-all`}>
                Edit Tier
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Analytics Summary */}
        <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-xl font-black text-slate-900">Tier Distribution</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-8">
            <div className="space-y-6">
              {[
                { label: "Basic Plan", value: 45, color: "bg-slate-200" },
                { label: "Pro Plan", value: 38, color: "bg-primary" },
                { label: "Elite Plan", value: 17, color: "bg-slate-900" },
              ].map((item) => (
                <div key={item.label} className="space-y-3">
                  <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                    <span>{item.label}</span>
                    <span className="text-slate-900">{item.value}%</span>
                  </div>
                  <div className="h-2.5 bg-slate-50 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pro Banner */}
        <div className="bg-gradient-to-br from-primary to-primary-foreground rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:scale-110 transition-transform">
            <Star className="h-48 w-48" />
          </div>
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest">Revenue Tip</p>
            </div>
            <h3 className="text-3xl font-black">Increase Your LTV</h3>
            <p className="text-white/80 font-medium max-w-md leading-relaxed">
              Creators who offer an Elite tier see a 34% increase in their average revenue per user. Consider adding exclusive perks to your highest tier.
            </p>
            <Button className="h-14 px-10 rounded-2xl font-black bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/5">
              Learn Strategy
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
