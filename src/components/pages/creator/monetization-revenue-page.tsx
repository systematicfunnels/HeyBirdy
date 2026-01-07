"use client"

import { 
  DollarSign, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  Download, 
  Calendar, 
  CreditCard, 
  Wallet, 
  PieChart,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const STATS = [
  {
    title: "Total Balance",
    value: "$12,845.00",
    change: "+12.5%",
    trend: "up",
    icon: Wallet,
  },
  {
    title: "Pending Payout",
    value: "$3,450.00",
    change: "+8.2%",
    trend: "up",
    icon: Clock,
  },
  {
    title: "Lifetime Earnings",
    value: "$142,800",
    change: "+15.4%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Avg. CPM",
    value: "$14.20",
    change: "-2.4%",
    trend: "down",
    icon: TrendingUp,
  },
]

const REVENUE_SOURCES = [
  { name: "Affiliate Sales", amount: "$8,450", percentage: 65, color: "bg-primary" },
  { name: "Direct Sponsorships", amount: "$2,600", percentage: 20, color: "bg-slate-900" },
  { name: "Digital Products", amount: "$1,300", percentage: 10, color: "bg-slate-400" },
  { name: "Community Support", amount: "$495", percentage: 5, color: "bg-slate-200" },
]

const TRANSACTIONS = [
  { id: "1", type: "Affiliate Payout", source: "Amazon Associates", amount: "+$1,240.00", date: "Oct 24, 2023", status: "Completed" },
  { id: "2", type: "Digital Sale", source: "Gaming Guide PDF", amount: "+$45.00", date: "Oct 23, 2023", status: "Completed" },
  { id: "3", type: "Sponsorship", source: "Tech Brand X", amount: "+$2,500.00", date: "Oct 21, 2023", status: "Pending" },
  { id: "4", type: "Affiliate Payout", source: "Bluehost Referral", amount: "+$650.00", date: "Oct 18, 2023", status: "Completed" },
]

export function CreatorMonetizationRevenuePage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center shadow-2xl shadow-primary/20">
            <DollarSign className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">Revenue Hub</h1>
            <p className="text-slate-500 font-medium">Track your earnings and manage payouts</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-xl font-bold border-slate-200">
            <Calendar className="h-4 w-4 mr-2" /> Last 30 Days
          </Button>
          <Button className="h-12 px-8 rounded-xl font-bold shadow-xl shadow-primary/20 bg-slate-900 hover:bg-slate-800 text-white border-none">
            Withdraw Funds
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <Card key={stat.title} className="border-none shadow-2xl shadow-slate-200/50 hover:shadow-primary/10 transition-all duration-500 overflow-hidden group relative rounded-[2rem] bg-white">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <stat.icon className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-black tracking-tighter text-slate-900 mb-2 group-hover:text-primary transition-colors">{stat.value}</div>
              <div className="flex items-center gap-2">
                <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  stat.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {stat.change}
                </div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">vs last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* Revenue Breakdown */}
        <Card className="xl:col-span-1 border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
          <CardHeader className="p-8 pb-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center shadow-lg shadow-slate-200">
                <PieChart className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-xl font-black text-slate-900">Revenue Split</CardTitle>
            </div>
            <CardDescription className="font-medium text-slate-500">Earnings distribution by source</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-8">
              {REVENUE_SOURCES.map((source) => (
                <div key={source.name} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm font-black text-slate-900">{source.name}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{source.amount}</p>
                    </div>
                    <p className="text-sm font-black text-primary">{source.percentage}%</p>
                  </div>
                  <Progress value={source.percentage} className={`h-2.5 ${source.color}`} />
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 rounded-[1.5rem] bg-slate-50 border border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Payout Method</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <CreditCard className="h-5 w-5 text-slate-900" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900">Visa ending in 4242</p>
                    <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest flex items-center">
                      <CheckCircle2 className="h-3 w-3 mr-1" /> Primary Method
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-xl">
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <div className="xl:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-slate-900" />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tight text-slate-900">Recent Activity</h2>
                <p className="text-slate-500 font-medium text-sm">Latest earnings and payouts</p>
              </div>
            </div>
            <Button variant="ghost" className="font-bold text-primary hover:bg-primary/5 rounded-xl">
              View All History <ArrowUpRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="grid gap-4">
            {TRANSACTIONS.map((tx) => (
              <Card key={tx.id} className="group hover:shadow-xl transition-all duration-500 border-none shadow-sm rounded-[1.5rem] bg-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${
                        tx.status === 'Completed' ? 'bg-green-50' : 'bg-orange-50'
                      }`}>
                        {tx.type.includes('Payout') ? (
                          <Download className={`h-5 w-5 ${tx.status === 'Completed' ? 'text-green-600' : 'text-orange-600'}`} />
                        ) : (
                          <DollarSign className={`h-5 w-5 ${tx.status === 'Completed' ? 'text-green-600' : 'text-orange-600'}`} />
                        )}
                      </div>
                      <div>
                        <p className="font-black text-slate-900 group-hover:text-primary transition-colors">{tx.type}</p>
                        <p className="text-xs font-medium text-slate-500">{tx.source} • {tx.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-lg text-slate-900">{tx.amount}</p>
                      <Badge className={`${
                        tx.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                      } border-none font-bold text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-lg`}>
                        {tx.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tax Information Banner */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-8 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/20">
            <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:scale-110 transition-transform">
              <PieChart className="h-32 w-32" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div>
                <h4 className="text-xl font-black mb-2">Tax Information</h4>
                <p className="text-sm font-medium text-slate-400 leading-relaxed max-w-md">
                  Your tax documents for 2023 are now ready for review. Make sure your information is up to date for smooth payouts.
                </p>
              </div>
              <Button variant="outline" className="rounded-xl font-bold bg-white/5 border-white/10 hover:bg-white/10 text-white border-none px-8 h-12">
                Download Documents
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
