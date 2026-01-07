"use client"

import { 
  Ticket, 
  Search,
  Plus,
  ArrowRight,
  TrendingUp,
  Zap,
  Gift
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { PromoCodeCard, type PromoCode } from "@/components/affiliate/links/promo-code-card"

const CODES: PromoCode[] = [
  {
    id: "c1",
    code: "ALEX20",
    discount: "20% OFF",
    program: "Elite Gaming Gear",
    usage: 450,
    savings: "$2,450",
    performance: "+22%",
    status: "Active",
    expiry: "No Expiry",
  },
  {
    id: "c2",
    code: "BOOTCAMP10",
    discount: "10% OFF",
    program: "Full-Stack Bootcamp",
    usage: 120,
    savings: "$1,200",
    performance: "+8%",
    status: "Active",
    expiry: "Feb 28, 2026",
  },
  {
    id: "c3",
    code: "ELENA15",
    discount: "15% OFF",
    program: "Digital Art Mastery",
    usage: 85,
    savings: "$640",
    performance: "-2%",
    status: "Expired",
    expiry: "Jan 01, 2026",
  }
]

export function AffiliatePromoCodesPage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="relative rounded-3xl bg-[#0f172a] p-8 md:p-12 overflow-hidden text-white">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Ticket className="h-64 w-64" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <Badge className="bg-primary/20 hover:bg-primary/30 text-primary-foreground border-none mb-4 px-4 py-1">
              Personalized Discounts
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Your Custom Codes.</h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Offer exclusive savings to your audience with your own vanity promo codes. Track usages and total savings in real-time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-8 rounded-xl font-bold shadow-lg shadow-primary/20">
                <Plus className="h-4 w-4 mr-2" /> Request Custom Code
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 rounded-xl font-bold bg-white/5 border-white/10 hover:bg-white/10 text-white">
                <TrendingUp className="h-4 w-4 mr-2" /> Analytics
              </Button>
            </div>
          </div>
          <div className="hidden lg:block shrink-0">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white w-64">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">Total Savings</CardTitle>
                <div className="text-3xl font-bold text-primary">$4,290</div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-400">Saved by your audience</p>
                <div className="flex items-center gap-1 text-green-400 text-xs mt-4">
                  <Gift className="h-3 w-3" />
                  <span>655 total usages</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Usages</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="text-3xl font-black text-slate-900">655</div>
             <p className="text-xs text-green-500 font-bold flex items-center mt-2">
               <TrendingUp className="h-3 w-3 mr-1" /> +15% from last month
             </p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customer Savings</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="text-3xl font-black text-slate-900">$4,290</div>
             <p className="text-xs text-slate-500 font-medium mt-2">Across all active codes</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg. Discount</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="text-3xl font-black text-slate-900">15%</div>
             <p className="text-xs text-slate-500 font-medium mt-2">Weighted average value</p>
          </CardContent>
        </Card>
      </div>

      {/* Search & List */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Ticket className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Active Promo Codes</h2>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input placeholder="Search codes or programs..." className="pl-10 h-11 bg-white border-slate-200 rounded-xl shadow-sm focus:ring-primary" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CODES.map((promo) => (
            <PromoCodeCard key={promo.id} promo={promo} />
          ))}

          {/* Request New Code Card */}
          <Card className="border-dashed border-2 border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center p-8 text-center hover:bg-white hover:border-primary/30 transition-all duration-300 cursor-pointer group rounded-3xl min-h-[250px]">
             <div className="h-16 w-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300 border border-slate-100">
                <Plus className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
             </div>
             <CardTitle className="text-xl font-bold text-slate-900">Need a custom code?</CardTitle>
             <CardDescription className="mt-2 text-slate-500 font-medium">
                Request a personalized promo code for any of your active programs to boost conversions.
             </CardDescription>
             <Button variant="link" className="mt-6 gap-2 text-primary font-bold text-base group/btn">
                Browse Programs <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
             </Button>
          </Card>
        </div>
      </div>

      {/* Analytics CTA */}
      <Card className="border-none bg-gradient-to-r from-[#0f172a] to-[#1e293b] p-8 md:p-12 overflow-hidden relative rounded-3xl text-white">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <Zap className="h-64 w-64" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Detailed Code Analytics</h2>
            <p className="text-slate-400 max-w-lg text-lg">
              See which codes are performing best and which channels are driving the most savings for your audience.
            </p>
          </div>
          <Button size="lg" className="h-14 px-10 rounded-2xl font-bold shadow-2xl shadow-primary/20 group">
            View Full Report <TrendingUp className="h-5 w-5 ml-2 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
          </Button>
        </div>
      </Card>
    </div>
  )
}
