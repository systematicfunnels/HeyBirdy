"use client"

import { 
  Users, 
  Search, 
  Filter, 
  Shield, 
  Plus, 
  Star,
  Trophy,
  ArrowUpRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { NetworkStatCard } from "@/components/creator/affiliate/network-stat-card"
import { AffiliateListItem, type Affiliate } from "@/components/creator/affiliate/affiliate-list-item"

const AFFILIATES: Affiliate[] = [
  {
    id: "1",
    name: "Alex Rivers",
    email: "alex@example.com",
    avatar: "https://i.pravatar.cc/150?u=1",
    status: "Active",
    tier: "Elite",
    sales: 142,
    revenue: "$12,450",
    joined: "Oct 12, 2025",
    rating: 4.9
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah@example.com",
    avatar: "https://i.pravatar.cc/150?u=2",
    status: "Active",
    tier: "Pro",
    sales: 98,
    revenue: "$8,200",
    joined: "Nov 05, 2025",
    rating: 4.7
  },
  {
    id: "3",
    name: "Mike Ross",
    email: "mike@example.com",
    avatar: "https://i.pravatar.cc/150?u=3",
    status: "Pending",
    tier: "Standard",
    sales: 0,
    revenue: "$0",
    joined: "Jan 02, 2026",
    rating: 0
  },
  {
    id: "4",
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar: "https://i.pravatar.cc/150?u=4",
    status: "Active",
    tier: "Pro",
    sales: 54,
    revenue: "$4,800",
    joined: "Dec 15, 2025",
    rating: 4.5
  },
  {
    id: "5",
    name: "David Park",
    email: "david@example.com",
    avatar: "https://i.pravatar.cc/150?u=5",
    status: "Suspended",
    tier: "Standard",
    sales: 12,
    revenue: "$850",
    joined: "Aug 20, 2025",
    rating: 3.2
  }
]

const NETWORK_STATS = [
  { label: "Total Partners", value: "248", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Pending Approval", value: "14", icon: Shield, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Top Tier (Elite)", value: "32", icon: Star, color: "text-purple-600", bg: "bg-purple-50" },
]

export function CreatorAffiliateNetworkPage() {
  return (
    <div className="max-w-6xl space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">Affiliate Network</h1>
          <p className="text-slate-500 font-medium">Manage your partners and grow your referral ecosystem.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-12 rounded-2xl border-slate-200 font-bold gap-2">
            <Filter className="h-4 w-4" /> Filter
          </Button>
          <Button className="h-12 rounded-2xl font-black gap-2 shadow-xl shadow-primary/20">
            <Plus className="h-4 w-4" /> Invite Affiliate
          </Button>
        </div>
      </div>

      {/* Search & Tabs */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Search by name, email or tier..." 
            className="h-12 pl-12 pr-4 rounded-2xl border-slate-100 bg-white shadow-sm focus:ring-primary/10 transition-all"
          />
        </div>
        <div className="flex bg-slate-100/50 p-1.5 rounded-2xl gap-1 w-full md:w-auto overflow-x-auto">
          {["All", "Active", "Pending", "Suspended"].map((tab) => (
            <Button 
              key={tab} 
              variant={tab === "All" ? "secondary" : "ghost"}
              className={`h-9 px-6 rounded-xl font-black text-xs uppercase tracking-widest transition-all
                ${tab === "All" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900"}
              `}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      {/* Network Stats & Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
          {NETWORK_STATS.map((item) => (
            <NetworkStatCard 
              key={item.label}
              {...item}
            />
          ))}
        </div>
        
        {/* Rewards / Leaderboard Quick View */}
        <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[2rem] bg-slate-900 text-white p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:scale-110 transition-transform">
            <Trophy className="h-24 w-24" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-black tracking-tight">Top Performance</h3>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary text-white text-[8px] font-black uppercase tracking-widest">Live</span>
            </div>
            <div className="space-y-4">
              {[
                { name: "Alex Rivers", sales: 142, reward: "Elite Tier" },
                { name: "Sarah Chen", sales: 98, reward: "Pro Tier" },
              ].map((top, i) => (
                <div key={top.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-black">{i + 1}</div>
                    <span className="text-sm font-bold">{top.name}</span>
                  </div>
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">{top.reward}</span>
                </div>
              ))}
            </div>
            <Button variant="link" className="text-primary p-0 h-auto text-xs font-black mt-6 uppercase tracking-widest hover:text-white transition-colors">
              View Full Leaderboard <ArrowUpRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </Card>
      </div>

      {/* Affiliates List */}
      <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] bg-white overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-slate-50">
                  <th className="p-8 text-xs font-black text-slate-400 uppercase tracking-widest">Affiliate</th>
                  <th className="p-8 text-xs font-black text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="p-8 text-xs font-black text-slate-400 uppercase tracking-widest">Tier</th>
                  <th className="p-8 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Performance</th>
                  <th className="p-8 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {AFFILIATES.map((affiliate) => (
                  <AffiliateListItem key={affiliate.id} affiliate={affiliate} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-8 border-t border-slate-50 bg-slate-50/30 flex items-center justify-between">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Showing 5 of 248 affiliates</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="h-10 rounded-xl border-slate-200 font-bold px-6">Previous</Button>
              <Button variant="outline" size="sm" className="h-10 rounded-xl border-slate-200 font-bold px-6">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
