"use client"

import { 
  DollarSign, 
  Wallet, 
  CreditCard, 
  Download,
  Calendar,
  CheckCircle2,
  Clock,
  Plus,
  Building2,
  ChevronRight,
  TrendingUp,
  Receipt,
  Award
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PayoutProgress, EarningOverviewCard } from "@/components/affiliate/dashboard/earning-stats"

const PAYOUT_HISTORY = [
  { id: "p1", date: "Jan 01, 2026", amount: "$1,250.00", status: "Paid", method: "PayPal (****@gmail.com)" },
  { id: "p2", date: "Dec 01, 2025", amount: "$980.50", status: "Paid", method: "Bank Transfer (****4242)" },
  { id: "p3", date: "Nov 01, 2025", amount: "$1,120.00", status: "Paid", method: "PayPal (****@gmail.com)" },
]

const PAYMENT_METHODS = [
  { id: "m1", type: "PayPal", details: "arivera****@gmail.com", isDefault: true },
  { id: "m2", type: "Bank Account", details: "Chase Bank ****4242", isDefault: false },
]

export function AffiliateEarningsPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <div className="relative rounded-[2.5rem] bg-[#0f172a] p-8 md:p-14 overflow-hidden text-white shadow-2xl shadow-slate-900/20">
        <div className="absolute top-0 right-0 p-4 opacity-[0.03] rotate-12">
          <DollarSign className="h-96 w-96" />
        </div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/20 blur-[120px] rounded-full" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Wallet className="h-4 w-4 text-primary" />
              </div>
              <Badge className="bg-white/5 hover:bg-white/10 text-white border-white/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                Revenue Hub
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.1]">
              Your Wealth <br/>
              <span className="text-primary italic">Accumulated.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              Track your commissions, manage payouts, and optimize your earnings across all active partnerships.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-10 rounded-2xl font-bold shadow-2xl shadow-primary/20 text-base group">
                <Wallet className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" /> Withdraw Funds
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 rounded-2xl font-bold bg-white/5 border-white/10 hover:bg-white/10 text-white text-base">
                <Download className="h-5 w-5 mr-2" /> Financial Report
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shrink-0">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white border-none shadow-2xl w-full sm:w-56 group hover:bg-white/10 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Available Now</CardTitle>
                <div className="text-4xl font-black text-primary group-hover:scale-105 transition-transform origin-left">$4,250</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1.5 text-green-400 text-[10px] font-bold bg-green-400/10 w-fit px-2 py-1 rounded-full">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>READY TO PAY</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white border-none shadow-2xl w-full sm:w-56 group hover:bg-white/10 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pending Clear</CardTitle>
                <div className="text-4xl font-black text-blue-400 group-hover:scale-105 transition-transform origin-left">$840</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1.5 text-blue-400 text-[10px] font-bold bg-blue-400/10 w-fit px-2 py-1 rounded-full">
                  <Clock className="h-3 w-3" />
                  <span>CLEARING IN 5D</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Stats Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Lifetime Revenue", value: "$24,150", trend: "+12.5%", icon: TrendingUp, color: "text-green-500", bg: "bg-green-50" },
          { label: "Avg. Monthly", value: "$2,840", trend: "+4.2%", icon: DollarSign, color: "text-blue-500", bg: "bg-blue-50" },
          { label: "Payout Count", value: "24", trend: "Steady", icon: Receipt, color: "text-purple-500", bg: "bg-purple-50" },
          { label: "Growth Index", value: "A+", trend: "Top Tier", icon: Award, color: "text-orange-500", bg: "bg-orange-50" }
        ].map((stat, i) => (
          <EarningOverviewCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Payout History */}
        <Card className="lg:col-span-8 border-none shadow-2xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden bg-white">
          <CardHeader className="p-10 pb-6 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-black tracking-tight text-slate-900">Payout History</CardTitle>
              <CardDescription className="text-base font-medium text-slate-500">Your recent successful withdrawals.</CardDescription>
            </div>
            <Button variant="ghost" className="font-black text-primary hover:bg-primary/5 gap-2">
              All History <ChevronRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 border-y border-slate-100">
                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {PAYOUT_HISTORY.map((payout, i) => (
                    <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="px-10 py-6">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-slate-400" />
                          </div>
                          <span className="font-black text-slate-900">{payout.date}</span>
                        </div>
                      </td>
                      <td className="px-10 py-6 font-black text-primary text-lg">{payout.amount}</td>
                      <td className="px-10 py-6">
                        <Badge className="bg-green-500/10 text-green-600 border-none font-black text-[10px] uppercase tracking-widest px-3 py-1">
                          {payout.status}
                        </Badge>
                      </td>
                      <td className="px-10 py-6 text-slate-500 font-medium">{payout.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Side Panel: Payment Methods & Goals */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden bg-white">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-xl font-black tracking-tight text-slate-900">Payment Methods</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-4">
              {PAYMENT_METHODS.map((method, i) => (
                <div key={i} className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${method.isDefault ? 'border-primary bg-primary/5' : 'border-slate-100 hover:border-slate-200'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${method.isDefault ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                        {method.type === 'PayPal' ? <CreditCard className="h-5 w-5" /> : <Building2 className="h-5 w-5" />}
                      </div>
                      <span className="font-black text-slate-900">{method.type}</span>
                    </div>
                    {method.isDefault && <Badge className="bg-primary text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5">Default</Badge>}
                  </div>
                  <p className="text-sm text-slate-500 font-medium ml-13">{method.details}</p>
                </div>
              ))}
              <Button variant="outline" className="w-full h-14 rounded-2xl border-dashed border-2 border-slate-200 hover:border-primary hover:text-primary hover:bg-primary/5 font-black gap-2">
                <Plus className="h-5 w-5" /> Add New Method
              </Button>
            </CardContent>
          </Card>

          <PayoutProgress 
            current={24000} 
            target={30000} 
            nextReward="2.5% Commission Bonus" 
          />
        </div>
      </div>
    </div>
  )
}
