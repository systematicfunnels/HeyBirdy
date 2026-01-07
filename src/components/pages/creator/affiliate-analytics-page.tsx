"use client"

import { 
  Users, 
  DollarSign, 
  Target,
  Calendar,
  Download,
  Percent
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AnalyticsStatCard } from "@/components/creator/affiliate/analytics-stat-card"
import { TopPartnerListItem, type TopPartner } from "@/components/creator/affiliate/top-partner-list-item"
import { ConversionListItem, type Conversion } from "@/components/creator/affiliate/conversion-list-item"

const STATS = [
  { 
    title: "Total Revenue", 
    value: "$42,850.00", 
    change: "+12.5%", 
    trend: "up", 
    icon: DollarSign,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  { 
    title: "Active Affiliates", 
    value: "156", 
    change: "+8.2%", 
    trend: "up", 
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  { 
    title: "Conversion Rate", 
    value: "4.8%", 
    change: "-1.4%", 
    trend: "down", 
    icon: Target,
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  { 
    title: "Commisions Paid", 
    value: "$8,570.00", 
    change: "+15.4%", 
    trend: "up", 
    icon: Percent,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
]

const TOP_AFFILIATES: TopPartner[] = [
  { name: "Alex Rivers", sales: 142, revenue: "$12,450", avatar: "https://i.pravatar.cc/150?u=1" },
  { name: "Sarah Chen", sales: 98, revenue: "$8,200", avatar: "https://i.pravatar.cc/150?u=2" },
  { name: "Mike Ross", sales: 76, revenue: "$6,150", avatar: "https://i.pravatar.cc/150?u=3" },
  { name: "Emma Wilson", sales: 54, revenue: "$4,800", avatar: "https://i.pravatar.cc/150?u=4" },
]

const RECENT_CONVERSIONS: Conversion[] = [
  { id: "ORD-7281", affiliate: "Alex Rivers", amount: "$149.00", commission: "$29.80", status: "Paid", date: "2 mins ago" },
  { id: "ORD-7280", affiliate: "Sarah Chen", amount: "$89.00", commission: "$17.80", status: "Pending", date: "15 mins ago" },
  { id: "ORD-7279", affiliate: "Mike Ross", amount: "$199.00", commission: "$39.80", status: "Paid", date: "1 hour ago" },
  { id: "ORD-7278", affiliate: "Unknown", amount: "$45.00", commission: "$9.00", status: "Processing", date: "2 hours ago" },
]

export function CreatorAffiliateAnalyticsPage() {
  return (
    <div className="max-w-6xl space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">Affiliate Analytics</h1>
          <p className="text-slate-500 font-medium">Track your program&apos;s performance and partner success.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-12 rounded-2xl border-slate-200 font-bold gap-2">
            <Calendar className="h-4 w-4" /> Last 30 Days
          </Button>
          <Button className="h-12 rounded-2xl font-black gap-2 shadow-xl shadow-primary/20">
            <Download className="h-4 w-4" /> Export Report
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <AnalyticsStatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Top Affiliates */}
        <Card className="lg:col-span-1 border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] bg-white">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-xl font-black text-slate-900">Top Partners</CardTitle>
            <CardDescription className="text-slate-500 font-medium">Highest performing affiliates this month.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-4 space-y-6">
            {TOP_AFFILIATES.map((affiliate) => (
              <TopPartnerListItem key={affiliate.name} partner={affiliate} />
            ))}
            <Button variant="ghost" className="w-full h-12 rounded-2xl font-black text-slate-500 hover:text-primary hover:bg-primary/5 transition-all mt-4">
              View All Partners
            </Button>
          </CardContent>
        </Card>

        {/* Recent Conversions */}
        <Card className="lg:col-span-2 border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] bg-white">
          <CardHeader className="p-8 pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-black text-slate-900">Recent Conversions</CardTitle>
                <CardDescription className="text-slate-500 font-medium">Real-time affiliate sales activity.</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="h-10 rounded-xl border-slate-100 font-bold text-xs">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-8 pt-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="pb-6 text-xs font-black text-slate-400 uppercase tracking-widest">Order</th>
                    <th className="pb-6 text-xs font-black text-slate-400 uppercase tracking-widest">Affiliate</th>
                    <th className="pb-6 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Amount</th>
                    <th className="pb-6 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Commission</th>
                    <th className="pb-6 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {RECENT_CONVERSIONS.map((order) => (
                    <ConversionListItem key={order.id} conversion={order} />
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Program Health */}
      <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <CardContent className="p-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary/20 text-primary border-none font-black text-[10px] px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
                Program Insights
              </Badge>
              <h2 className="text-3xl font-black mb-4">Program Health is Excellent!</h2>
              <p className="text-slate-400 font-medium mb-8 leading-relaxed">
                Your affiliate program has seen a 24% increase in active partners this month. 
                Conversion rates are 1.2% above industry average for your niche.
              </p>
              <div className="flex gap-4">
                <Button className="h-12 px-8 rounded-2xl font-black bg-white text-slate-900 hover:bg-slate-100 transition-all">
                  Optimize Commissions
                </Button>
                <Button variant="outline" className="h-12 px-8 rounded-2xl font-black border-slate-700 hover:bg-slate-800 text-white transition-all">
                  Invite Partners
                </Button>
              </div>
            </div>
            <div className="space-y-6 bg-slate-800/50 p-8 rounded-[2rem] border border-slate-700/50">
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                  <span>Target Achievement</span>
                  <span className="text-primary">85%</span>
                </div>
                <Progress value={85} className="h-2 bg-slate-700" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                  <span>Affiliate Satisfaction</span>
                  <span className="text-primary">92%</span>
                </div>
                <Progress value={92} className="h-2 bg-slate-700" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                  <span>Referral Quality</span>
                  <span className="text-primary">78%</span>
                </div>
                <Progress value={78} className="h-2 bg-slate-700" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
